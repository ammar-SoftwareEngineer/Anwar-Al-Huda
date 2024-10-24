// src/components/Features.js

const Features = () => {
  return (
    <section className="py-20 bg-gray-100" id="features">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          ميزات الشركة
        </h2>
        <div className="flex flex-wrap justify-center">
          {/* ميزة 1 */}
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">خبرة متخصصة</h3>
              <p className="text-gray-600">
                تتمتع الشركة بخبرة واسعة في مجال مكافحة الحشرات في البيئات
                المختلفة مثل المنازل والمستشفيات والمصانع، مما يضمن استخدام أفضل
                الطرق الفعّالة لحماية هذه الأماكن.
              </p>
            </div>
          </div>
          {/* ميزة 2 */}
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">
                استخدام منتجات آمنة
              </h3>
              <p className="text-gray-600">
                تعتمد الشركة على مبيدات حشرية آمنة ومرخصة للاستخدام في الأماكن
                التي تتطلب معايير صحية عالية مثل المستشفيات والمراكز العلاجية،
                مما يضمن سلامة العاملين والسكان.
              </p>
            </div>
          </div>
          {/* ميزة 3 */}
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">خدمات شاملة</h3>
              <p className="text-gray-600">
                قدم الشركة خدمات مكافحة الحشرات المتكاملة التي تشمل القضاء على
                مختلف أنواع الحشرات والآفات في البيئات السكنية والتجارية على حد
                سواء، مع تقديم حلول مخصصة لكل عميل.
              </p>
            </div>
          </div>
          {/* ميزة4 */}
          <div className="w-full md:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">
                استجابة سريعة وفعالة
              </h3>
              <p className="text-gray-600">
                تتميز الشركة بالقدرة على الاستجابة السريعة لطلبات العملاء وتوفير
                خدماتها في أوقات مناسبة، مما يساعد في تقليل تأثير الحشرات وضمان
                راحة العملاء.
              </p>
            </div>
          </div>
          {/* يمكنك إضافة ميزات أخرى هنا */}
        </div>
      </div>
    </section>
  );
};

export default Features;
