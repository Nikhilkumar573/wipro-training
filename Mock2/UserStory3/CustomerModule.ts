// Enum for roles
enum Role {
  Attendee = "Attendee",
  Organizer = "Organizer"
}

// Interface for customer
interface ICustomer {
  id: number;
  name: string;
  email: string;
  role: Role;
}

// Decorator — logs when a new customer is created
function Log<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      console.log(`✅ Customer created: ${args[1]}`); // args[1] = name
    }
  };
}

@Log
class Customer implements ICustomer {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public role: Role
  ) {}
}

// Create customers
const customers: ICustomer[] = [
  new Customer(1, "Alice", "alice@example.com", Role.Attendee),
  new Customer(2, "Bob", "bob@example.com", Role.Organizer)
];

// Display all customers
for (const c of customers) {
  console.log(`👤 ${c.name} registered as ${c.role}`);
}
