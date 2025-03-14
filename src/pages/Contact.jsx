import React from 'react';
import Title from '../components/Title';
import { Phone, Mail, MapPin, Instagram  } from "lucide-react";

const Contact = () => {
    return (
        <div className="container mx-auto px-6 lg:px-12 max-w-screen-xl">
            <div className="text-center text-2xl border-t pt-24 lg:pt-36">
                <Title text1="HUBUNGI" text2="KAMI" />
            </div>
            <div className="my-12 lg:my-16 flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
                {/* Image Section */}
                <div className="w-full sm:w-3/4 md:w-1/2 lg:max-w-[480px]">
                    <img 
                        className="w-full rounded-xl shadow-xl object-cover"
                        src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Cake Shop" 
                    />
                </div>
                
                {/* Contact Info Section */}
<div className="flex flex-col justify-start md:justify-center items-center md:items-start gap-6 text-center md:text-left max-w-md w-full">
    {/* <div className="w-full">
        <h3 className="font-semibold text-2xl text-pink-900">Toko Kami</h3>
        <p className="text-pink-500 leading-relaxed flex flex-col gap-1">
 
  <span className="flex items-center gap-2">
    <MapPin size={18} /> Jalan Raya Desa Kapur No. 12 Pontianak Barat.
  </span>
  <span className="flex items-center gap-2">
    <MapPin size={18} /> Jalan Prona No. 07 Pontianak Timur.
  </span>
</p>
    </div> */}
    <div className="w-full">
    <h3 className="font-semibold text-2xl text-pink-900">Kontak</h3>

    <p className="text-pink-500 leading-relaxed flex flex-col gap-1">
  <span className="flex items-center gap-2">
    <Phone size={18} /> +6289603324917
  </span>
  <span className="flex items-center gap-2">
    <Instagram size={18} /> @cakesyulita
  </span>
  <span className="flex items-center gap-2">
    <Mail size={18} /> cakesyulita57@gmail.com
  </span>
</p>
    </div>
    <div className="w-full">
    <h3 className="font-semibold text-2xl text-pink-900">Pesanan & Custom Cake</h3>

        <p className="text-pink-500 leading-relaxed">Dapatkan kue spesial untuk acara Anda</p>
    </div>
    <button 
    className="w-full md:w-auto bg-pink-500 border border-pink-500 px-8 py-3 text-sm font-medium rounded-lg text-white transition-all duration-300 shadow-md
               hover:bg-pink-600 hover:shadow-pink-400/50 hover:scale-105 
               active:scale-95"
>
    Pesan Sekarang
</button>

</div>

            </div>
        </div>
    );
}

export default Contact;
