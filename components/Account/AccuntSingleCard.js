function AccuntSingleCard({name}) {
  return (
    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex justify-between items center mb-4">
        <h3 className="font-medium capitalize text-gray-800 text-lg">
          {name}
        </h3>
        <a href="#" className="text-primary">
          Edit
        </a>
      </div>
      <div className="space-y-1">
        <h4 className="text-gray-700 font-medium">Mr ToTo</h4>
        <p className="text-gray-800">3891 Ranchview Dr.</p>
        <p className="text-gray-800">Richardson, Califora</p>
        <p className="text-gray-800">(+880) 1234567891</p>
      </div>
    </div>
  );
}

export default AccuntSingleCard;
