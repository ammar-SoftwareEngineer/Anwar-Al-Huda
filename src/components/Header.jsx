// src/components/Header.js

import logo from '../../src/assets/night-culb_12346285.png'; // تأكد من أن لديك الشعار في هذا المسار

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-5">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <div className="flex items-center">
                    <img src={logo} alt="شعار انوار الهدى" className="h-10 md:h-12 lg:h-14" />
                    <h1 className="text-2xl font-bold">انوار الهدى</h1>
                </div>
                <nav className="mt-4 md:mt-0 w-full md:w-auto text-center md:text-right">
                    <a href="#features" className="block md:inline mx-3 hover:text-gray-400">الصفحة الرئيسية</a>
                    <a href="#about" className="block md:inline mx-3 hover:text-gray-400">من نحن </a>
                    <a href="#products" className="block md:inline mx-3 hover:text-gray-400">المنتجات</a>
                    {/* <a href="#testimonials" className="block md:inline mx-3 hover:text-gray-400">شهادات العملاء</a> */}
                    <a href="#contact" className="block md:inline mx-3 hover:text-gray-400">تواصل معنا</a>
                </nav>
                
            </div>
            {/* <div className="mt-4 text-center">
                <p className="text-gray-400">تواصل معنا عبر: <a href="tel:+1234567890" className="text-white">+123 456 7890</a> | <a href="mailto:info@alhuda.com" className="text-white">info@alhuda.com</a></p>
            </div> */}
        </header>
    );
};

export default Header;
