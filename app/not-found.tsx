import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 overflow-hidden">
          <div className="flex flex-reverse-col lg:flex-row">
            {/* Left Side - Profile */}
            <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden bg-gray-200">
                    <Image
                      src="/placeholder-profile.jpg"
                      alt="Profile"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-lg px-2 py-1 text-xs font-medium">
                    404
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Hey, I'm [Your Name]
                </h1>
                
                <p className="text-base text-gray-600 mb-5 leading-relaxed">
                  Creative developer, digital artist, and problem solver. 
                  I craft beautiful experiences at the intersection of design and technology.
                </p>

                <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-gray-200/70 text-gray-700 rounded-full text-sm">
                    Full-Stack Developer
                  </span>
                  <span className="px-3 py-1 bg-gray-200/70 text-gray-700 rounded-full text-sm">
                    UI/UX Designer
                  </span>
                  <span className="px-3 py-1 bg-gray-200/70 text-gray-700 rounded-full text-sm">
                    Creative Coder
                  </span>
                </div>

                <div className="flex gap-3 justify-center lg:justify-start">
                  <Link
                    href="/"
                    className="px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                  >
                    Take Me Home
                  </Link>
                  <Link
                    href="/contact"
                    className="px-5 py-2.5 bg-white/80 text-gray-900 rounded-lg font-medium border border-gray-300 hover:bg-white transition-colors text-sm"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Journey & Details */}
            <div className="lg:w-1/2 bg-gray-100/50 p-6 lg:p-10 flex flex-col justify-center">
              <div className="text-center lg:text-left space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">My Journey</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    With over [X] years of experience in web development and design, 
                    I've helped businesses and individuals bring their digital visions to life. 
                    My passion lies in creating intuitive, beautiful, and performant applications 
                    that make a real difference in people's lives.
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs mb-3">
                    Looks like you've wandered off the beaten path
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4 justify-center lg:justify-start">
                    <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-2.001 4.568C14.568 13.728 13.252 14.16 12 14.16s-2.568-.432-3.567-1.432c-1.105-1.105-1.832-2.71-2.001-4.568-.016-.176-.016-.375 0-.551.169-1.858.896-3.463 2.001-4.568C9.432 2.04 10.748 1.608 12 1.608s2.568.432 3.567 1.432c1.105 1.105 1.832 2.71 2.001 4.568.016.176.016.375 0 .551z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.001 12.017.001z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
