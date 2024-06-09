'use client';

import * as React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import emailjs from '@emailjs/browser';

// eslint-disable-next-line import/order
import { DateTimePicker } from '../dashboard/preview/dateTimePicker/date-time-picker';

import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDateStore, useFormStore } from '@/app/lib/store';
import { DatePicker } from '@nextui-org/react';

import { now, getLocalTimeZone } from '@internationalized/date';
export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default">GET THIS WEBSITE</Button>
        </DialogTrigger>
        <DialogContent className="bg-black/60 backdrop-blur-[5px] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Get This Website</DialogTitle>
            <DialogDescription>
              Provide your email or phone number, and choose a convenient day
              and time. We will call you or email you to discuss your website
              creation needs and pricing.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="default">GET THIS WEBSITE</Button>
      </DrawerTrigger>
      <DrawerContent className=" backdrop-blur-[16px]">
        <DrawerHeader className=" text-left">
          <DrawerTitle>Get This Website</DrawerTitle>
          <DrawerDescription>
            Provide your email or phone number, and choose a convenient day and
            time. We will call you or email you to discuss your website creation
            needs and pricing.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
  const { toast } = useToast();

  const { formData, setFormData } = useFormStore();
  const { globalDate, setGlobalDate } = useDateStore();
  // const [formData, setFormData] = useState({
  //   phoneNumber: '',
  //   email: '',
  //   username: '',
  //   // Add other fields as needed (e.g., dateTime from DateTimePicker)
  // });

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  // ? this should be in a use case
  // ? {{email Js send email}}
  const sendEmail = (e: any) => {
    const templateParams = {
      to_name: 'totaltech',
      from_name: formData.username,
      subject: 'Getting website offer',
      message: `Client ${formData.username} wants you to call them 
                at ${formData.phoneNumber} at ${globalDate?.hour}:${globalDate?.minute}/${globalDate?.era} on ${globalDate?.day}/${globalDate?.month}/${globalDate?.year}, 
                or just email them at ${formData.email}.`,
    };

    e.preventDefault();
    emailjs
      .send('service_zh25lbr', 'template_tcfc0ub', templateParams, {
        publicKey: 'zCwC7ca2BSPtKUbpE',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          toast({
            description: 'Your message has been sent.',
          });
        },
        (error) => {
          // console.log('FAILED...', error);
        },
      );
  };

  return (
    <form
      className={cn('grid items-start gap-4', className)}
      onSubmit={sendEmail}
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Phone Number</Label>
        <Input
          required
          defaultValue=""
          id="phoneNumber"
          name="phoneNumber"
          type="phoneNumber"
          onChange={handleChange}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          defaultValue=""
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input
          required
          defaultValue=""
          id="username"
          name="username"
          onChange={handleChange}
        />
      </div>
      {/* <div className="w-full">
        <DateTimePicker />
      </div> */}
      <div className="flex w-full max-w-xl flex-row gap-4">
        <DatePicker
          hideTimeZone
          showMonthAndYearPickers
          defaultValue={now(getLocalTimeZone())}
          hourCycle={24}
          label="Event Date"
          variant="bordered"
          onChange={setGlobalDate}
        />
      </div>

      <Button type="submit">Make Appoinment</Button>
    </form>
  );
}
