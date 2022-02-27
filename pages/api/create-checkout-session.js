const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async ( req, res) => {
    const {items, email} = req.body;

    const transformedItems = items.map(item => ({
        description: item.product.shortDescription,
        quantity: item.quantity,
        price_data: {
            currency: 'usd',
            unit_amount: item.product.price * 100,
            product_data:{
                name: item.product.title,
                images: [item.product.image]
            },
        }
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_rates: ['shr_1KT3HiJVWQ691sRsN4zlhbbZ'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA', 'BD'],
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/cart`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.product.image))
        }
        
    });

    res.status(200).json({ id: session.id })
};