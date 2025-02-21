
function Footer() {
  return (
    <footer className="relative bg-blueGray-200 bg-gradient-to-r from-[#374151] via-[#1f2937] to-[#111827] pt-5 pb-6 text-white">
      <div className="mx-auto px-4 container">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="px-4 w-full lg:w-6/12">
            <h4 className="font-semibold text-blueGray-700 text-3xl">Let's keep in touch!</h4>
            <h5 className="mt-0 mb-2 text-blueGray-600 text-lg">
              Find us on any of these platforms.
            </h5>
            <div className="mt-6 mb-6 lg:mb-0">
              <button onClick={() => window.open('https://github.com/vaidikcode')} className="justify-center items-center bg-white shadow-lg mr-2 rounded-full outline-none focus:outline-none w-10 h-10 font-normal text-lightBlue-400 align-center" type="button">
                <img src='https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png' className='rounded-full' alt="GitHub" />
              </button>
              <button onClick={() => window.open('https://dribbble.com/')} className="justify-center items-center bg-white shadow-lg mr-2 rounded-full outline-none focus:outline-none w-10 h-10 font-normal text-lightBlue-600 align-center" type="button">
                <img src='https://assets.mofoprod.net/network/images/slack.original.jpg' className='rounded-full' alt="Dribbble" />
              </button>
              <button onClick={() => window.open('https://www.linkedin.com/')} className="justify-center items-center bg-white shadow-lg mr-2 rounded-full outline-none focus:outline-none w-10 h-10 font-normal text-pink-400 align-center" type="button">
                <img src='https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png' className='rounded-full' alt="LinkedIn" />
              </button>
              <button className="justify-center items-center bg-white shadow-lg mr-2 rounded-full outline-none focus:outline-none w-10 h-10 font-normal text-blueGray-800 align-center" type="button">
                <img src='https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg' className='rounded-full' alt="Twitter" />
              </button>
            </div>
          </div>
          <div className="px-4 w-full lg:w-6/12">
            <div className="flex flex-wrap items-top mb-1">
              <div className="ml-auto px-4 w-full lg:w-4/12">
                <span className="block font-semibold text-blueGray-500 text-sm uppercase">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="block pb-2 font-semibold text-blueGray-600 hover:text-blueGray-800 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                  </li>
                  <li>
                    <a className="block pb-2 font-semibold text-blueGray-600 hover:text-blueGray-800 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                  </li>
                  <li>
                    <a className="block pb-2 font-semibold text-blueGray-600 hover:text-blueGray-800 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                  </li>
                  <li>
                    <a className="block pb-2 font-semibold text-blueGray-600 hover:text-blueGray-800 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="px-4 w-full lg:w-4/12">
                <span className="block mb-2 font-semibold text-blueGray-500 text-sm uppercase">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="block pb-2 font-semibold text-blueGray-600 hover:text-blueGray-800 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                  </li>
                  <li>
                    <a className="block pb-2 font-semibold text-blueGray-600 hover:text-blueGray-800 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="block pb-2 font-semibold text-blueGray-600 hover:text-blueGray-800 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="block pb-2 font-semibold text-blueGray-600 hover:text-blueGray-800 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-blueGray-300" />
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          <div className="mx-auto px-4 w-full md:w-4/12 text-center">
            <div className="pt-1 font-semibold text-blueGray-500 text-sm">
              Copyright © <span id="get-current-year">2025</span>
              <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer"> Project by</a>
              <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800"> Team CODE CRAFTERS</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer