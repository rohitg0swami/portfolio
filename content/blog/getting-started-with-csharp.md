---
title: "Getting Started with C# and .NET Core"
excerpt: "Learn the fundamentals of C# and .NET Core development, from setting up your environment to building your first application."
category: "csharp"
date: "2024-01-15"
tags: ["csharp", "dotnet", "programming", "tutorial"]
---

C# is a modern, object-oriented programming language developed by Microsoft. Combined with .NET Core, it provides a powerful platform for building cross-platform applications.

## Why Choose C# and .NET Core?

.NET Core offers several compelling advantages:

- **Cross-platform**: Build and run applications on Windows, macOS, and Linux
- **High performance**: Optimized runtime and compilation
- **Modern language features**: Async/await, LINQ, pattern matching
- **Strong typing**: Catch errors at compile-time
- **Rich ecosystem**: Extensive libraries and frameworks

## Setting Up Your Development Environment

### Prerequisites

1. **Install .NET SDK**
   - Download from [dotnet.microsoft.com](https://dotnet.microsoft.com)
   - Verify installation: `dotnet --version`

2. **Choose an IDE**
   - Visual Studio (Windows/Mac)
   - Visual Studio Code (Cross-platform)
   - JetBrains Rider (Cross-platform)

## Creating Your First C# Application

Let's create a simple console application:

```csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Console.WriteLine("Welcome to C# and .NET Core!");
        }
    }
}
```

### Running the Application

```bash
dotnet new console -n HelloWorld
cd HelloWorld
dotnet run
```

## Core C# Concepts

### Variables and Data Types

```csharp
// Value types
int number = 42;
double price = 19.99;
bool isActive = true;
char grade = 'A';

// Reference types
string name = "John Doe";
int[] numbers = { 1, 2, 3, 4, 5 };
```

### Object-Oriented Programming

C# is an object-oriented language that supports:

- **Encapsulation**: Bundle data and methods together
- **Inheritance**: Create hierarchies of classes
- **Polymorphism**: Use objects of different types through a common interface
- **Abstraction**: Hide complex implementation details

Example:

```csharp
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Introduce()
    {
        Console.WriteLine($"Hi, I'm {Name} and I'm {Age} years old.");
    }
}

// Usage
var person = new Person
{
    Name = "Alice",
    Age = 30
};
person.Introduce();
```

### Async/Await Pattern

Handle asynchronous operations elegantly:

```csharp
public async Task<string> FetchDataAsync()
{
    using var httpClient = new HttpClient();
    var response = await httpClient.GetStringAsync("https://api.example.com/data");
    return response;
}
```

## Best Practices

1. **Follow naming conventions**
   - PascalCase for classes and methods
   - camelCase for local variables
   - Use descriptive names

2. **Use nullable reference types**
   ```csharp
   string? nullableString = null;
   string nonNullableString = "Hello";
   ```

3. **Implement proper error handling**
   ```csharp
   try
   {
       // Your code here
   }
   catch (Exception ex)
   {
       Console.WriteLine($"Error: {ex.Message}");
   }
   ```

4. **Leverage LINQ for data manipulation**
   ```csharp
   var evenNumbers = numbers.Where(n => n % 2 == 0).ToList();
   ```

## Next Steps

Now that you've got the basics, explore:

- **ASP.NET Core** for web development
- **Entity Framework Core** for database access
- **Blazor** for building interactive web UIs
- **MAUI** for cross-platform mobile apps

## Conclusion

C# and .NET Core provide a robust foundation for modern application development. With its rich feature set and cross-platform capabilities, it's an excellent choice for developers of all levels.

Happy coding! 🚀
