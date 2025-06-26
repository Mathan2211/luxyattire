
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, Mail, Phone, Calendar, Save, Camera, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    dateOfBirth: '1990-05-15',
    gender: 'male'
  });

  const [profileImage, setProfileImage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('Saving account settings:', formData);
    console.log('Profile image:', profileImage);
    // Add save logic here
  };

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-luxury-charcoal mb-2">Account Settings</h1>
            <p className="text-luxury-stone">Manage your personal information and preferences</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            {/* Profile Picture Section */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-6">Profile Picture</h3>
              <div className="flex items-center space-x-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={profileImage} alt="Profile" />
                  <AvatarFallback className="bg-luxury-plum text-white text-2xl">
                    {formData.firstName.charAt(0)}{formData.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-3">
                    <Label htmlFor="profile-upload" className="cursor-pointer">
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="flex items-center space-x-2"
                        asChild
                      >
                        <span>
                          <Upload className="w-4 h-4" />
                          <span>Upload Photo</span>
                        </span>
                      </Button>
                    </Label>
                    <Input
                      id="profile-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                  <p className="text-sm text-luxury-stone">
                    JPG, PNG or GIF. Max size 5MB.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-6">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="firstName" className="text-luxury-charcoal font-medium">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-luxury-charcoal font-medium">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-luxury-charcoal font-medium">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phone" className="text-luxury-charcoal font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="dateOfBirth" className="text-luxury-charcoal font-medium">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="gender" className="text-luxury-charcoal font-medium">Gender</Label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-plum"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Button 
                onClick={handleSave}
                className="bg-luxury-plum hover:bg-luxury-plum/90 text-white px-8 py-3"
              >
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountSettings;
