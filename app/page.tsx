import QuranHeart from "@/components/QuranHeart";




export default function Home() {
  return <>
  <main className="flex flex-col justify-center items-center py-6 bg-gray-50 min-h-screen">
  <h1 className="text-2xl sm:mb-20 md:mb-20 lg:py-2 font-semibold text-gray-800 text-center">
   💜 وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا 
  </h1>
 
  <QuranHeart></QuranHeart>
   <p className=" text-green-900 text-center">
    عَنِ النَّبِيِّ ﷺ: <br/>
    «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
  </p>
</main>

  </>;
}