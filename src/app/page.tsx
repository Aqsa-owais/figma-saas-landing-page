import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Logo Icon.png";
import logo1 from "../../public/whitepace.png";
import gether from "../../public/Work Together Image.png";
import apple from "../../public/Apple.png";
import google from "../../public/Google.png";
import slack from "../../public/Slack_Technologies_Logo 1.png";
import micro from "../../public/microsoft 1.png";
import footerlogo from "../../public/Logo.png";
import icon from "../../public/Icon.png"

export default function Component() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container-fluid mx-auto px-4 py-4 flex items-center justify-between bg-[#043873]">
        <div className="flex items-center  pl-[150px]">
          <Image
            src={logo}
            alt="Whitepace Logo"
            width={140}
            height={32}
            className="h-8 w-auto "
          />
          <Image src={logo1} alt="logo1" className="pl-3" />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link className="text-white hover:text-white/80" href="#">
            Products
          </Link>
          <Link className="text-white hover:text-white/80" href="#">
            Solutions
          </Link>
          <Link className="text-white hover:text-white/80" href="#">
            Resources
          </Link>
          <Link className="text-white hover:text-white/80" href="#">
            Pricing
          </Link>
        </nav>
        <div className="pr-[150px]">
          <button className="bg-[#Ffe492] text-black px-6 py-2 rounded-md hover:bg-[#FFD43B]/90 transition-colors">
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container-fluid mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center bg-[#043873]">
        <div>
          <h1 className="text-5xl font-bold text-white mb-6  pl-[150px]">
            Get More Done with whitepace
          </h1>
          <p className="text-white/80 mb-8 text-lg  pl-[150px]">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <div className="pl-[150px]">
            <button className="bg-[#4f9cf9] text-white px-6 py-3 rounded-md hover:bg-[#2D7DED]/90 transition-colors">
              <span>Try Whitepace Free </span><Image src={icon} alt="icon" className="inline-block w-4 h-4"/>
            </button>
          </div>
        </div>
        <div className="bg-[#c4defd] w-[500px] h-[300px]"></div>
      </section>

      {/* Project Management Section */}
      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center bg-white">
        <div>
          <h2 className="text-4xl font-bold text-black mb-6 pl-[150px]">
            Project <br /> Management
          </h2>
          <p className="text-[#212529] /80 mb-8 pl-[150px]">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <div className="pl-[150px]">
            <button className="bg-[#4f9cf9] text-white px-6 py-3 rounded-md hover:bg-[#2D7DED]/90 transition-colors">
              Get Started <Image src={icon} alt="icon"className="inline-block w-4 h-4"/>
            </button>
          </div>
        </div>
        <div className="bg-[#c4defd] w-[470px] h-[300px]"></div>
      </section>

      {/* Work Together Section */}
      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center  ">
        <div className="w-[400px] h-[400px] flex items-center justify-center pb-[50px] ml-28">
          <Image
            src={gether}
            alt="gather"
            width={800}
            height={800}
            className="w-[300px] h-[300px] ml-28"
          />
        </div>
        <div className="pr-[30px] mr-44">
          <h2 className="text-4xl font-bold text-black mb-6 pr-[100px]">
            Work together
          </h2>
          <p className="text-[#212529]/80 mb-8">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="bg-[#4f9cf9] text-white px-6 py-3 rounded-md hover:bg-[#2D7DED]/90 transition-colors">
            Try it now <Image src={icon} alt="icon" className="inline-block w-4 h-4"/>
          </button>
        </div>
      </section>

      {/* Extension Section */}
      <section className="container-fluid mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center bg-[#043873]">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6 pl-[150px]">
            Use as Extension
          </h2>
          <p className="text-white/80 mb-8 pl-[150px]">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <div className="pl-[150px]">
            <button className="bg-[#4f9cf9] text-white px-6 py-3 rounded-md hover:bg-[#2D7DED]/90 transition-colors">
              Lets Go <Image src={icon} alt="icon"className="inline-block w-4 h-4"/>
            </button>
          </div>
        </div>
        <div className="bg-[#c4defd] w-[470px] h-[300px]"></div>
      </section>

      {/* Customize Section */}
      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center bg-white">
        <div className="bg-[#c4defd] w-[470px] h-[300px] ml-[110px]"></div>
        <div className="w-[470px]">
          <h2 className="text-4xl font-bold text-black mb-6">
            Customise it to <br /> your needs
          </h2>
          <p className="text-[#212529] mb-8">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <button className="bg-[#4f9cf9] text-white px-6 py-3 rounded-md hover:bg-[#2D7DED]/90 transition-colors">
            Lets Go <Image src={icon} alt="icon" className="inline-block w-4 h-4"/>
          </button>
        </div>
      </section>

      {/* Everywhere Section */}
      <section className="bg-[#043873] py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your work, everywhere you are
          </h2>
          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <button className="bg-[#4f9cf9] text-white px-6 py-3 rounded-md hover:bg-[#2D7DED]/90 transition-colors">
            Try Taskey <Image src={icon} alt="icon" className="inline-block w-4 h-4"/>
          </button>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            <Image
              src={apple}
              alt="Apple"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <Image
              src={micro}
              alt="Microsoft"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <Image
              src={slack}
              alt="Slack"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <Image
              src={google}
              alt="Google"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#043873] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src={footerlogo}
                alt="Whitepace Logo"
                width={140}
                height={32}
                className="h-8 w-auto mb-4"
              />

              <p className="text-[#f7f7ee]/80 text-sm">
                whitepace was created for <br /> the new ways we live and <br /> work. We make
                a better <br /> workspace around the world
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-[#f7f7ee]/80">
                <li>
                  <Link href="#">Overview</Link>
                </li>
                <li>
                  <Link href="#">Pricing</Link>
                </li>
                <li>
                  <Link href="#">Customer stories</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-[#f7f7ee]/80">
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Guides & tutorials</Link>
                </li>
                <li>
                  <Link href="#">Help center</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-[#f7f7ee]/80">
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Media kit</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
            ©2021 Whitepace LLC.
          </div>
        </div>
      </footer>
    </div>
  );
}
