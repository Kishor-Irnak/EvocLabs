import React, { useState } from "react";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import EvocLogo from "../assets/EvocLab_Logo.png";
import Testimonials from "./Testimonials";
import Services from "./Services";
import Footer from "./Footer";

interface BookDemoProps {
  onBack: () => void;
}

const BookDemo: React.FC<BookDemoProps> = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="bg-background animate-fade-in">
      {/* --- HERO SECTION --- */}
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-subtle-grid bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {/* Header / Nav */}
        <div className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded flex items-center justify-center">
              <img
                src={EvocLogo}
                alt="Evoc Labs Logo"
                className="w-8 h-8 opacity-90"
              />
            </div>
            <span className="font-semibold text-xl tracking-tight text-text-main">
              Evoc Labs
            </span>
          </div>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-text-secondary hover:text-text-main transition-colors group text-sm font-medium"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-8 md:py-12 z-10">
          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Side: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 hidden lg:block"
            >
              <div className="mb-8">
                <BlurText
                  text="Powering Online Growth for D2C Brands"
                  className="text-4xl lg:text-6xl font-bold text-text-main tracking-tight leading-[1.1] mb-6"
                />

                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                    alt="Growth Dashboard"
                    className="w-full h-auto object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-6 left-6 text-white max-w-xs">
                    <p className="font-semibold text-lg">Grow Your Business</p>
                    <p className="text-sm text-white/70">
                      Data-driven strategies designed for scale.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:max-w-lg mx-auto order-1 lg:order-2"
            >
              <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/5">
                {!isSubmitted ? (
                  <form
                    action="https://formsubmit.co/kishorirnak4u@gmail.com"
                    method="POST"
                    className="space-y-5"
                    onSubmit={() => setIsSubmitted(true)}
                  >
                    <div className="mb-2">
                      <h3 className="text-2xl font-bold text-text-main mb-1">
                        Book a Demo
                      </h3>
                      <p className="text-sm text-text-muted">
                        Fill in your details to schedule a call.
                      </p>
                    </div>

                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Demo Request - EvocLabs"
                    />

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/30 focus:scale-[1.01]"
                        placeholder="Select Your Name"
                      />
                    </div>

                    {/* Phone & Alt Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <div className="w-16 bg-background border border-border rounded-xl flex items-center justify-center text-text-secondary text-sm">
                          +91
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/30 focus:scale-[1.01]"
                          placeholder="Enter 10 Digit Phone Number"
                        />
                      </div>
                    </div>

                    {/* Category */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
                        Category of products you sell?{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="category"
                          required
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="text-text-muted">
                            Select
                          </option>
                          <option value="D2c brand">D2C Brand</option>
                          <option value="Dropshipper">Dropshipper</option>
                          <option value="Wholesaler / supplier">
                            Wholesaler / Supplier
                          </option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Niche */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
                        Niche <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="niche"
                          required
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="text-text-muted">
                            Select Niche
                          </option>
                          <option value="jewellery">Jewellery</option>
                          <option value="appeareal">Apparel</option>
                          <option value="cosmetic">Cosmetic</option>
                          <option value="fashion and accessories">
                            Fashion and Accessories
                          </option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 w-4 h-4 rounded border-border bg-background text-primary focus:ring-primary"
                        required
                      />
                      <label
                        htmlFor="terms"
                        className="text-xs text-text-muted"
                      >
                        I've read the T&C & Privacy Policy
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="group w-full bg-text-main hover:bg-text-secondary text-border font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-[0.98] mt-2"
                    >
                      Request a Call
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-[400px] flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 ring-8 ring-primary/5">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-main mb-2">
                      Request Received!
                    </h3>
                    <p className="text-text-muted max-w-[250px] mx-auto mb-8">
                      We'll be in touch shortly to schedule your demo.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-sm font-medium text-primary hover:text-primary-hover underline decoration-2 underline-offset-4"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- TRUSTED BRANDS --- */}
      <Testimonials />

      {/* --- REVIEWS --- */}
      <Services />

      {/* --- FOOTER --- */}
      <Footer onCareersClick={() => {}} />
    </div>
  );
};

export default BookDemo;
