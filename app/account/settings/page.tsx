"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { User, Bell, Shield, Eye, Trash2, Download } from "lucide-react"
import { redirect } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function AccountSettingsPage() {
  const { user, logout } = useAuth()
  const { toast } = useToast()

  if (!user) {
    redirect("/login")
  }

  const [profileData, setProfileData] = useState({
    firstName: user.name?.split(" ")[0] || "",
    lastName: user.name?.split(" ")[1] || "",
    email: user.email || "",
    phone: "",
    dateOfBirth: "",
  })

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newsletter: false,
    productRecommendations: true,
    securityAlerts: true,
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: false,
    dataCollection: true,
    personalizedAds: false,
  })

  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleProfileUpdate = () => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    })
  }

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your new passwords match.",
        variant: "destructive",
      })
      return
    }

    if (passwordData.newPassword.length < 8) {
      toast({
        title: "Password too short",
        description: "Your password must be at least 8 characters long.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Password updated",
      description: "Your password has been changed successfully.",
    })

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
    setIsChangingPassword(false)
  }

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      toast({
        title: "Account deletion requested",
        description: "We'll send you an email to confirm account deletion.",
      })
    }
  }

  const handleDownloadData = () => {
    toast({
      title: "Data export requested",
      description: "We'll email you a download link for your data within 24 hours.",
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Account Settings</h1>
        <p className="text-xl text-gray-600">Manage your account preferences and privacy settings</p>
      </div>

      <div className="space-y-8">
        {/* Profile Information */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <User className="h-6 w-6 text-amber-600" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profileData.lastName}
                  onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                className="mt-2"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  className="mt-2"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={profileData.dateOfBirth}
                  onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                  className="mt-2"
                />
              </div>
            </div>

            <Button onClick={handleProfileUpdate} className="bg-gray-900 hover:bg-gray-800 text-white rounded-full">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Password & Security */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-amber-600" />
              Password & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!isChangingPassword ? (
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Password</h3>
                  <p className="text-gray-600">Last changed 3 months ago</p>
                </div>
                <Button variant="outline" onClick={() => setIsChangingPassword(true)} className="bg-transparent">
                  Change Password
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div className="flex gap-4">
                  <Button
                    onClick={handlePasswordChange}
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-full"
                  >
                    Update Password
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsChangingPassword(false)}
                    className="bg-transparent rounded-full"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            <Separator />

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline" className="bg-transparent">
                  Enable 2FA
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Bell className="h-6 w-6 text-amber-600" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Order Updates</h3>
                  <p className="text-sm text-gray-600">Notifications about your orders and shipping</p>
                </div>
                <Switch
                  checked={notifications.orderUpdates}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, orderUpdates: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Promotions & Sales</h3>
                  <p className="text-sm text-gray-600">Special offers and promotional emails</p>
                </div>
                <Switch
                  checked={notifications.promotions}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, promotions: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Newsletter</h3>
                  <p className="text-sm text-gray-600">Weekly newsletter with lifestyle tips and new arrivals</p>
                </div>
                <Switch
                  checked={notifications.newsletter}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, newsletter: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Product Recommendations</h3>
                  <p className="text-sm text-gray-600">Personalized product suggestions</p>
                </div>
                <Switch
                  checked={notifications.productRecommendations}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, productRecommendations: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Security Alerts</h3>
                  <p className="text-sm text-gray-600">Important security notifications (recommended)</p>
                </div>
                <Switch
                  checked={notifications.securityAlerts}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, securityAlerts: checked })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Eye className="h-6 w-6 text-amber-600" />
              Privacy Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Profile Visibility</h3>
                  <p className="text-sm text-gray-600">Make your profile visible to other users</p>
                </div>
                <Switch
                  checked={privacy.profileVisibility}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, profileVisibility: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Data Collection</h3>
                  <p className="text-sm text-gray-600">Allow us to collect data to improve your experience</p>
                </div>
                <Switch
                  checked={privacy.dataCollection}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, dataCollection: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Personalized Ads</h3>
                  <p className="text-sm text-gray-600">Show ads based on your interests and activity</p>
                </div>
                <Switch
                  checked={privacy.personalizedAds}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, personalizedAds: checked })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data & Account Management */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle>Data & Account Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Download Your Data</h3>
                <p className="text-sm text-gray-600">Get a copy of all your account data</p>
              </div>
              <Button variant="outline" onClick={handleDownloadData} className="bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-red-600">Delete Account</h3>
                <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
              </div>
              <Button
                variant="outline"
                onClick={handleDeleteAccount}
                className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 bg-transparent"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sign Out */}
        <div className="text-center pt-8">
          <Button
            variant="outline"
            onClick={logout}
            className="bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Sign Out of All Devices
          </Button>
        </div>
      </div>
    </div>
  )
}
