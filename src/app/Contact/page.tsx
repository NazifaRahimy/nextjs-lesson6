// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Contact",
//   description: "Get in touch with us for questions, feedback, or support.",
// };

// export default function ContactPage() {
//   return (
//     <div className="w-full h-screen px-3">
//         <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.nody.ir/files/2023/02/22/nody-%D8%A8%DA%A9-%DA%AF%D8%B1%D8%A7%D9%86%D8%AF-%D8%AA%D9%84%D9%81%D9%86-%D8%AB%D8%A7%D8%A8%D8%AA-1677075010.jpg")' }}>
      
//         </div>
//     </div>
//   );
// }
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us for questions, feedback, or support.",
};

export default function ContactPage() {
  return (
      <div className="px-3">
          <div
      className="w-full h-screen flex items-center justify-center px-3"
    style={{
        backgroundImage:
          'url("https://cdn.nody.ir/files/2023/02/22/nody-%D8%A8%DA%A9-%DA%AF%D8%B1%D8%A7%D9%86%D8%AF-%D8%AA%D9%84%D9%81%D9%86-%D8%AB%D8%A7%D8%A8%D8%AA-1677075010.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* فرم */}
      <form className="w-[500px]  border-2 border-black bg-opacity-90 p-6 rounded-md shadow-md flex flex-col gap-4">
        {/* عنوان فرم */}
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="border border-black rounded bg-transparent placeholder:text-black px-3 py-2 focus:outline-none "
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-black rounded px-3 py-2 focus:outline-none bg-transparent placeholder:text-black"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="border border-black bg-transparent placeholder:text-black px-3 py-2 h-32 resize-none focus:outline-none "
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500  py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
      </div>
  );
}

