import QuranHeart from "@/components/QuranHeart";

export default function Home() {
  return <>
  <main className="flex flex-col justify-center items-center py-6 bg-gray-50 min-h-screen">
  <h1 className="text-2xl lg:py-2 font-semibold text-gray-800 text-center">
   💜 وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا 
  </h1>
 
  <QuranHeart />
   <p className="lg:mt-2 text-gray-600 text-center max-w-md">
    عَنِ النَّبِيِّ ﷺ: <br/>
    «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
  </p>
</main>

  </>;
}