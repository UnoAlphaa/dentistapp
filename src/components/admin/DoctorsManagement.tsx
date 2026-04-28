"use client";
import { useGetDoctors } from '@/hooks/use-doctors'
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { EditIcon, MailIcon, PhoneIcon, Plus, Stethoscope } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';
import AddDoctorDiaog from './AddDoctorDiaog';
import EditDoctorDialog from './EditDoctorDialog';
import { Doctor } from '@prisma/client';

const DoctorsManagement = () => {
    const {data:doctors = []} = useGetDoctors();
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

    const handleEditDoctor = (doctor:Doctor)=> {
        setSelectedDoctor(doctor);
        setIsEditDialogOpen(true)
    }
    const hanleCloseEditDialog = ()=> {
        setIsEditDialogOpen(false)
        setSelectedDoctor(null)
    }


  return (
    <>
    <Card className='mb-12'>
        <CardHeader className='flex items-center justify-between'>
            <div>
                <CardTitle className='flex items-center gap-2'>
                    <Stethoscope  className='size-5 text-primary'/>
                    Doctors Management
                </CardTitle>
                <CardDescription>
                    Manage and oversee all doctors in your practice.
                </CardDescription>
            </div>

            <Button onClick={()=>setIsAddDialogOpen(true)} 
            className="bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary
            flex items-center gap-3
            "    
            >
                <Plus className='size-4' />
                Add Doctor
            </Button>
        </CardHeader>

        <CardContent className='space-y-4'>
            {doctors.map((doctor)=>(
                <div key={doctor.id} 
                className='bg-muted/30 px-6 py-3 md:space-y-2 md:flex items-center justify-between rounded-xl border border-border/50'>
                    <div className='flex items-center gap-4'>
                        <Image
                        src={doctor.imageUrl}
                        alt={doctor.name}
                        width={48}
                        height={48}
                        className='size-12 rounded-full object-cover ring-2 ring-background'
                        />

                        <div className='space-y-0.5'>
                            <div className='font-semibold'>{doctor.name}</div>
                            <div className='text-sm text-muted-foreground'>{doctor.speciality}
                                <span>{doctor.gender === "MALE" ? "Male" : "Female"}</span>
                            </div>
                            <div className='md:flex items-center gap-4 mt-1'>
                                <div className='text-sm text-muted-foreground flex items-center gap-1'>
                                    <MailIcon className='h-3 w-3' />
                                    {doctor.email}
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <PhoneIcon className="h-3 w-3" />
                                    {doctor.phone}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="font-semibold text-primary">{doctor.appointmentCount}</div>
                    <div className="text-xs text-muted-foreground">Appointments</div>
                  </div>

                  {doctor.isActive ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  ) : (
                    <Badge variant="secondary">Inactive</Badge>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-3"
                    onClick={() => handleEditDoctor(doctor)}
                  >
                    <EditIcon className="size-4 mr-1" />
                    Edit
                  </Button>
                </div>

                </div>
            ))}
        </CardContent>
    </Card>

    <AddDoctorDiaog isOpen={isAddDialogOpen} onClose={()=>setIsAddDialogOpen(false)} /> 
    <EditDoctorDialog isOpen={isEditDialogOpen} onClose={hanleCloseEditDialog}
    doctor={selectedDoctor}
    key={selectedDoctor?.id}
    />

    </>
  )
}

export default DoctorsManagement