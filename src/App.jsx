import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

   const API_URL = import.meta.env.VITE_API_URL;

const res = await axios.post(
  `${API_URL}/send-email`,
  {
    name
  }
);

      alert(res.data.message);

      setName("");
    } catch (error) {
      alert("Failed to send email");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Email Test Form
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          {loading ? "Sending..." : "Send Email"}
        </button>
      </form>
    </div>
  );
}

export default App;