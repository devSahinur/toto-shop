import { Register } from "../components/Auth/Register";
import Layout from "../components/layout";

function login() {
  return (
    <div>
      <Layout title={"no"}>
        <main>
          <Register />
        </main>
      </Layout>
    </div>
  );
}

export default login;
