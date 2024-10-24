import usage from "../../public/tool.jpg";

const ProductUsage = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          خدماتنا
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex items-stretch">
            <img
              src={usage}
              alt="شخص يرش الحشرات"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 p-4 flex items-stretch">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full list-none">
             
              <ul className="list-disc list-inside mt-4 mb-4">
                <li>خدمة مكافحة الحشرات المنزلية</li>
                <li>مكافحة الحشرات في المستشفيات والمراكز العلاجية</li>
                <li>مكافحة الحشرات في الاستراحات والمنتجعات</li>
                <li>مكافحة الحشرات في المصانع</li>
                <li>التفتيش الوقائي الدوري</li>
                <li>خدمة الاستجابة السريعة للطوارئ</li>
              </ul>
              <p className="text-gray-600 mt-4">
                هذه الخدمات تضمن بيئة نظيفة وآمنة وخالية من الآفات
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUsage;
