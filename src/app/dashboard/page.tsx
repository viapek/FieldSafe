
'use client';

import {useAuth} from '@/components/auth-provider';
import {Icons} from '@/components/icons';
import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger, SidebarSeparator} from '@/components/ui/sidebar';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

const DashboardPage = () => {
  const {signOut, user, isLoading} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/sign-in');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null; // AuthProvider will redirect
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <h2>Rolebase</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton href="#" >
                  <Icons.home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <Icons.settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarMenuButton onClick={signOut} className="w-full justify-start">
                <Icons.logout className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarGroup>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icons.profile className="h-5 w-5" />
              </Button>
              <SidebarTrigger>
                <Icons.menu className="h-5 w-5" />
              </SidebarTrigger>
            </div>
          </div>
          <p>Welcome to the dashboard, {user.email || 'User'}!</p>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;
