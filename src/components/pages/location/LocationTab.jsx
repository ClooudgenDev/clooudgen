import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Maps from './Maps';

const LocationTab = () => {
  return (
    <>
      <Tabs defaultValue="account" className="">
        <TabsList className="grid max-w-[400px] my-10 mx-auto grid-cols-2">
          <TabsTrigger value="account">USA Location</TabsTrigger>
          <TabsTrigger value="password">Bangladesh Location</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="w-full">
          <Maps
            locationTitle={'7200 Lake Ellenor Dr, Sutie 108 Orlando, FL-32809'}
            number={'+14072082598'}
            email={'info@clooudgen.com'}
            location={
              'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.564201905335!2d-81.40597462543404!3d28.462550691781196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77c47010fffff%3A0x3c4740d7d1d820d1!2s7200%20Lake%20Ellenor%20Dr%20%23%20108%2C%20Orlando%2C%20FL%2032809%2C%20USA!5e0!3m2!1sen!2sbd!4v1726560143394!5m2!1sen!2sbd'
            }
          />
        </TabsContent>
        <TabsContent value="password">
          <Maps
            locationTitle={
              'House 19, Road 16, Block C ,Banasree, Rampura ,Dhaka-1219 Bangladesh'
            }
            number={'+8809638152434'}
            email={'info@clooudgen.com'}
            location={
              'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.320660598598!2d90.428592!3d23.7715931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78c53338853%3A0x92faffce856c5fb6!2s19%20Rd%2016%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1726585622976!5m2!1sen!2sbd'
            }
          />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default LocationTab;
