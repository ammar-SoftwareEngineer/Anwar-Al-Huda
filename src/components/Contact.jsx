// src/components/Contact.js

const Contact = () => {
  return (
    <section id="contact" className="text-center py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">تواصل معنا</h2>
        <form className="mt-6 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="الاسم"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="رسالتك"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
          >
            إرسال
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
