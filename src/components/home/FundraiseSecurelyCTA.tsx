"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function FundraiseSecurelyCTA() {
  const router = useRouter();


  return (
    <div className="flex items-center justify-center px-6 py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center ">
            <Badge className="bg-[#00715D] flex justify-center gap-2  hover:bg-teal-800 text-white px-5 py-2.5 text-base font-medium rounded-lg">
              Fundraise Securely
              <Image
                src="/icons/padlock.png"
                width={1000}
                height={1000}
                alt="Happy celebration with confetti"
                className="w-6 h-6 object-cover"
              />
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight px-4">
            Monthly Prize Draw – Win Big, Support Good Causes!
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto px-4">
            Join our monthly prize draw for a chance to win fantastic cash prizes! Every ticket you purchase not only gives you the opportunity to win, but also helps support the cause of your choice. The more tickets sold, the bigger the prizes—and the more you help your chosen charity or cause. It&apos;s a win-win for everyone!   and add a button to go to the monthly cash draw page please
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onClick={() => router.push('/register-cause')}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all rounded-lg"
            >
              Register Your Cause – It&apos;s Free!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}