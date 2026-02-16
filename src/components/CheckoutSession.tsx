 
import { CheckoutAction } from "@/action/addtoCart.action"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { shippingAddress } from "@/Interfaces/Cartinterfaces"
import { Loader2 } from "lucide-react"
import { useRef, useState } from "react"
 export default function CheckoutSession({cartId}:{cartId : string}){
 const[isLoading,setIsLoading] =useState(false)
 
 
    const city = useRef<null|HTMLInputElement>(null);
  const details = useRef<null|HTMLInputElement>(null);
  const phone = useRef<null|HTMLInputElement>(null);
 async function checkout( ){
const shippingAddress :shippingAddress ={
    city:city?.current?.value as string,
    details:details?.current?.value  as string,
    phone:phone?.current?.value  as string,

}
const response =await CheckoutAction(cartId,shippingAddress);
console.log("checkout response",response);
if (response.status=='success') {
    location.href=response.session.url
}
setIsLoading(false)

}
 

    return<>
       

    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline"  className="w-full mt-2 py-4  bg-gradient-to-br from-black">Checkout</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Shipping Address</DialogTitle>
            <DialogDescription>
               please,Add your shipping Address
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="City">City</Label>
              <Input ref={city}  id="City" name="City" defaultValue="Cairo" />
            </Field>
            <Field>
              <Label htmlFor="details">Details</Label>
              <Input ref={details} id="details" name="Details" defaultValue="maadi" />
            </Field>
            <Field>
              <Label htmlFor="phone">phone</Label>
              <Input ref={phone}  id="phone" name="phone" defaultValue=" 01259874634" />
            </Field>
             
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={checkout}  type="submit">
                {isLoading&&<Loader2 className="animate-spin"/>}
                Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  

    </>

 }