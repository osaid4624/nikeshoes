import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { AiFillGithub, AiFillLike, AiFillMessage, AiFillMobile, AiFillThunderbolt } from 'react-icons/ai'; // GitHub icon
import { FaPhoneAlt, FaStore, FaThumbsUp } from 'react-icons/fa'; // Phone and Store icons
import { FaThumbsDown } from 'react-icons/fa';
import Footer from '@/components/Footer';

const GetHelpPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <div className="text-center my-5">
        <h2 className="flex justify-center text-3xl font-semibold pb-10 mt-10">GET HELP</h2>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-1/2 p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <main className="grid grid-cols-4 gap-10  p-5">
        {/* Left Section */}
        <section className="col-span-3 border-r-4 p-4 outline-gray-500 h-50vh">
          <h2 className="text-lg font-bold mb-2">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
          <p className='mt-5'>
            We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following
            payment options:
          </p>
          <ul className="list-disc pl-5">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>Apple Pay</li>
          </ul>
          <p>
            If you enter your PIN information at checkout, you’ll be able to pay for your order with PayTM or a local
            credit or debit card.
          </p>
          <p>
            <strong>Nike Members</strong> can store multiple debit or credit cards in their profile for faster checkout. If you’re not
            already a Member, join us today.
          </p>
          <div className="flex gap-3 mt-3">
            <button className="px-4 py-2 bg-black text-white rounded-full">JOIN US</button>
            <button className="px-4 py-2 bg-black text-white rounded-full">SHOP NIKE</button>
          </div>

          {/* FAQs Section */}
          <h3 className="text-base font-semibold mt-5">FAQs</h3>
          <p>
            <strong>Does my card need international purchase enabled?</strong>
            <br />
            Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at
            checkout if international purchases need to be enabled.
          </p>
          <p>
            <strong>Can I pay for one order with multiple methods?</strong>
            <br />
            No, payment for Nike orders can’t be split between multiple payment methods.
          </p>
          <p>
            <strong>What payment method is accepted for SNKRS orders?</strong>
            <br />
            You can use any accepted credit card to pay for your SNKRS order.
          </p>
          <strong>Why don't I see Apple Pay as an option?</strong>
            <br />
            <p>
            To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
          </p>
          <p>Was this answer helpful?</p>
          <div className='flex justify-start gap-3'>
          <FaThumbsUp className="h-10 w-10 text-black " />
          <FaThumbsDown className="h-10 w-10 text-black mt-2" />
          </div>
          <div className='mt-10'>
            <p className='text-gray-500'>RELATED</p>
            <h2 className='mt-4 ml-4'>WHAT ARE NIKE'S DELIVERY OPTIONS?</h2>
            <h2 className='mt-4 ml-4'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h2>
          </div>
        </section>

        {/* Right Section */}
        <aside className="col-span-1 ">
          <h3 className="font-semibold mb-2 text-center pb-10 text-2xl">CONTACT US</h3>
          <div className="flex flex-col items-center gap-2 mb-3 ">
            {/* GitHub Icon */}
            <AiFillMobile className="h-12 w-12 text-black" /> 
            <div className="text-center">
              <p>
                <strong>000 800 919 0566</strong>
                <br />
                Products & Orders: 24 hours a day
                <br />
                Company Info & Enquiries: 07:30 – 18:30, Monday – Friday
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mb-3">
          <AiFillMessage className="flex h-12 w-12 text-black justify-center" />
          <div className='text-center'>
          <p>24 hours a day, 7 days a week.</p>
          <p>We’ll reply within five business days.</p>
          </div>
          </div>
          {/* Contact Icons */}
          <div className="flex flex-col items-center gap-2 mt-5">
            {/* Phone Icon */}
            <FaPhoneAlt className="h-10 w-10 text-black" />
            <p className="font-bold">CALL US</p>
          </div>
          <p className='text-center'>Our customer service team is ready to assist you.</p>

          <div className="flex flex-col items-center gap-2 mt-5">
            {/* Store Locator Icon */}
            <FaStore className="h-10 w-10 text-black" />
            <p className="font-bold">STORE LOCATOR</p>
          </div>
          <p className='text-center'>Find Nike retail stores near you.</p>
        </aside>
      </main>
      <Footer/>
    </div>
  );
};

export default GetHelpPage;
