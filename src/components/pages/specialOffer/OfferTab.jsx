'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import WebOffer from './WebOffer';

export default function OfferTab() {
  return (
    <>
      <Tabs defaultValue="all" className="w-full px-3 mb-10">
        <TabsList className="container max-w-[850px] my-10 mx-auto  md:flex items-center bg-background gap-3 py-4 space-x-2 md:shadow-md md:border md:rounded-full text-primary sm:flex-row md:max-h-16 hidden">
          <TabsTrigger
            value="all"
            className="hover:bg-primary  px-3 text-sm lg:text-base w-full rounded-full hover:text-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-background h-10"
          >
            All Offers
          </TabsTrigger>
          <TabsTrigger
            value="app"
            className="hover:bg-primary px-3 text-sm lg:text-base w-full rounded-full hover:text-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-background h-10"
          >
            App Offer
          </TabsTrigger>
          <TabsTrigger
            value="web"
            className="hover:bg-primary px-3 text-sm lg:text-base w-full rounded-full hover:text-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-background h-10"
          >
            Web Offer
          </TabsTrigger>
          <TabsTrigger
            value="software"
            className="hover:bg-primary px-3 text-sm lg:text-base w-full rounded-full hover:text-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-background h-10"
          >
            Software Offer
          </TabsTrigger>
          <TabsTrigger
            value="combo"
            className="hover:bg-primary px-3 text-sm lg:text-base w-full  rounded-full hover:text-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-background h-10"
          >
            Combo Offer
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <WebOffer />
        </TabsContent>
        <TabsContent value="app">
          <h3 className="text-center">Currently No Offer Available</h3>
        </TabsContent>
        <TabsContent value="web">
          <WebOffer />
        </TabsContent>
        <TabsContent value="software">
          <h3 className="text-center">Currently No Offer Available</h3>
        </TabsContent>
        <TabsContent value="combo">
          <h3 className="text-center">Currently No Offer Available</h3>
        </TabsContent>
      </Tabs>
    </>
  );
}
