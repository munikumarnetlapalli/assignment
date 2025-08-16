import React, { useState } from 'react';
import { InputField } from '@/components/InputField';
import { DataTable, Column } from '@/components/DataTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Moon, Sun, Github, Book, Box } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive' | 'Pending';
}

const sampleUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
  { id: 2, name: 'Alice Smith', email: 'alice@example.com', role: 'Designer', status: 'Pending' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
  { id: 4, name: 'Carol Williams', email: 'carol@example.com', role: 'Developer', status: 'Active' },
  { id: 5, name: 'David Brown', email: 'david@example.com', role: 'QA Engineer', status: 'Active' },
];

const userColumns: Column<User>[] = [
  {
    header: 'Name',
    accessor: 'name',
    sortable: true,
    render: (value: any, row: User) => (
      <div className="flex items-center">
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
          <span className="text-primary font-medium text-sm">
            {row.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <span className="font-medium">{value}</span>
      </div>
    ),
  },
  {
    header: 'Email',
    accessor: 'email',
    sortable: true,
  },
  {
    header: 'Role',
    accessor: 'role',
    sortable: true,
  },
  {
    header: 'Status',
    accessor: 'status',
    sortable: true,
    render: (value: any) => {
      const statusColors = {
        Active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
        Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
        Inactive: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      };
      return (
        <Badge className={statusColors[value as keyof typeof statusColors]}>
          {value}
        </Badge>
      );
    },
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Box className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">React Component Library</h1>
              <p className="text-sm text-muted-foreground">InputField & DataTable Components</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={toggleTheme}>
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={`${window.location.protocol}//${window.location.hostname}:6006`} target="_blank" rel="noopener noreferrer">
                <Book className="w-4 h-4 mr-2" />
                Storybook
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Production-Ready React Components</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of accessible, customizable, and well-documented React components
            built with TypeScript and TailwindCSS.
          </p>
        </div>

        {/* Component Examples */}
        <Tabs defaultValue="inputfield" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="inputfield">InputField Component</TabsTrigger>
            <TabsTrigger value="datatable">DataTable Component</TabsTrigger>
          </TabsList>
          
          <TabsContent value="inputfield" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>InputField Examples</CardTitle>
                <CardDescription>
                  Flexible input component with multiple variants, sizes, and states
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Examples */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <InputField
                    label="Outlined (Default)"
                    placeholder="Enter text..."
                    variant="outlined"
                  />
                  <InputField
                    label="Filled Variant"
                    placeholder="Enter text..."
                    variant="filled"
                  />
                  <InputField
                    label="Ghost Variant"
                    placeholder="Enter text..."
                    variant="ghost"
                  />
                </div>

                {/* Size Examples */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Different Sizes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <InputField size="sm" label="Small" placeholder="Small input" />
                    <InputField size="md" label="Medium" placeholder="Medium input" />
                    <InputField size="lg" label="Large" placeholder="Large input" />
                  </div>
                </div>

                {/* State Examples */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Different States</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      label="Error State"
                      placeholder="Enter email"
                      invalid
                      errorMessage="Please enter a valid email"
                    />
                    <InputField
                      label="Disabled State"
                      placeholder="Disabled input"
                      disabled
                      helperText="This field is disabled"
                    />
                  </div>
                </div>

                {/* Interactive Example */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Interactive Example</h4>
                  <InputField
                    label="Your Message"
                    placeholder="Type something..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    clearable
                    onClear={() => setInputValue('')}
                    helperText="This input is controlled and clearable"
                  />
                  {inputValue && (
                    <p className="text-sm text-muted-foreground">
                      You typed: <span className="font-medium">{inputValue}</span>
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="datatable" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>DataTable Examples</CardTitle>
                <CardDescription>
                  Feature-rich table component with sorting, selection, and responsive design
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Table */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Basic Table with Sorting</h4>
                  <DataTable data={sampleUsers} columns={userColumns} />
                </div>

                {/* Selectable Table */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Table with Row Selection</h4>
                  <DataTable
                    data={sampleUsers}
                    columns={userColumns}
                    selectable
                    onRowSelect={setSelectedUsers}
                  />
                  {selectedUsers.length > 0 && (
                    <p className="text-sm text-muted-foreground">
                      Selected {selectedUsers.length} user(s): {selectedUsers.map(u => u.name).join(', ')}
                    </p>
                  )}
                </div>

                {/* Empty State */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Empty State</h4>
                  <DataTable
                    data={[]}
                    columns={userColumns}
                    emptyMessage="No users found. Try adjusting your search criteria."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Features Section */}
        <Card>
          <CardHeader>
            <CardTitle>Component Features</CardTitle>
            <CardDescription>
              Built with modern React patterns and best practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium">🎨 Customizable</h4>
                <p className="text-sm text-muted-foreground">
                  Multiple variants, sizes, and themes with full TailwindCSS customization
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">♿ Accessible</h4>
                <p className="text-sm text-muted-foreground">
                  Built with accessibility in mind, supporting keyboard navigation and screen readers
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">📱 Responsive</h4>
                <p className="text-sm text-muted-foreground">
                  Works seamlessly across desktop, tablet, and mobile devices
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">🔒 Type Safe</h4>
                <p className="text-sm text-muted-foreground">
                  Full TypeScript support with comprehensive type definitions
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">📖 Documented</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive Storybook documentation with examples and API reference
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">🎯 Production Ready</h4>
                <p className="text-sm text-muted-foreground">
                  Thoroughly tested and optimized for production use
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Built with React, TypeScript, TailwindCSS, and Storybook</p>
        </div>
      </footer>
    </div>
  );
}
