'use client'

import { addNewUserAction, editUserAction } from "@/actions"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils"
import { DialogDescription } from "@radix-ui/react-dialog"
import { useContext, useState } from "react"
import { useRouter } from "next/navigation"
import UserState, { UserContext } from "@/context"

function AddNewUser() {
  const {openPopup, setOpenPopup, addNewUserFormData, setAddNewUserFormData, currentEditedId, setCurrentEditedId} = useContext(UserContext)
  const router = useRouter();

  const handleSaveButtonValid = () => {
    return Object.keys(addNewUserFormData).every(key => addNewUserFormData[key].trim() !== '');
  }

  const handleAddNewUserAction = async () => {
    const result = currentEditedId !==null ? await editUserAction(currentEditedId, addNewUserFormData) : await addNewUserAction(addNewUserFormData)
    setOpenPopup(false);
    setAddNewUserFormData(addNewUserFormInitialState);
    setCurrentEditedId(null);
    currentEditedId !== null ? alert('User Updated'):alert('User Added ')
    router.refresh();
  }

  return (
    <div>
      <Button onClick={() => setOpenPopup(!false)} >Add New User</Button>
      <Dialog open={openPopup} onOpenChange={() => {
        setOpenPopup(false)
        setCurrentEditedId(null)
        setAddNewUserFormData(addNewUserFormInitialState)
      }} >

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {
                currentEditedId !== null? 'Edit User' : 'Add New User'
              }
            </DialogTitle>
          </DialogHeader>
          <DialogDescription></DialogDescription>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            <div className="grid grid-cols-1 items-center gap-4">
              {
                addNewUserFormControls.map(controlsItem => <div key={controlsItem.name}>
                  <Label htmlFor={controlsItem.name} className="text-right">
                    {controlsItem.label}
                  </Label>
                  <Input
                    id={controlsItem.name}
                    name={controlsItem.name}
                    placeholder={controlsItem.placeholder}
                    type={controlsItem.type}
                    value={addNewUserFormData[controlsItem.name]}
                    onChange={(e) => setAddNewUserFormData({
                      ...addNewUserFormData,
                      [controlsItem.name]: e.target.value
                    })}
                    className="col-span-3"
                  />
                </div>)
              }
              <DialogFooter>
                <Button className='disabled:opacity-25' disabled={!handleSaveButtonValid()} type="submit">Save</Button>
              </DialogFooter>
            </div>
          </form>

        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddNewUser;