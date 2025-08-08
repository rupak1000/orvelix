"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import AdminSidebar from "@/components/admin/sidebar"
import { Card, CardContent } from "@/components/ui/card"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && (!user || !user.isAdmin)) {
      router.push("/login?redirect=/admin") // Redirect to login if not admin
    }
  }, [user, isLoading, router])

  if (isLoading || !user || !user.isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <Card className="min-h-[calc(100vh-32px)]">
          <CardContent className="p-6">
            {children}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
