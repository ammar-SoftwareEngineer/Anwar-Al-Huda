const Hero = () => {
  return (
    <section className="hero text-center  py-20">
      <div className="container mx-auto">
        <div className="">
          <div>
            <h2 className="text-5xl font-bold ">
              أفضل حلول لمكافحة الآفات
            </h2>
            <p className="mt-4 text-lg">
              شركة أنوار الهدى رائدة في مجال مكافحة الحشرات وتقديم حلول المبيدات
              الحشرية للمنازل، المستشفيات، المصانع، الاستراحات، والمراكز
              العلاجية.
            </p>
          </div>
        </div>

        {/* <a href="#products" className="mt-8 inline-block bg-white text-green-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200">استعرض منتجاتنا</a> */}
      </div>
    </section>
  );
};

export default Hero;
