def calc(x, y):
    a = x * y
    b = x + y
    c = a + b
    return c

# Refactored code with better naming conventions

def calculate_total_cost(price, quantity):
    cost_before_tax = price * quantity  # Calculate total cost before tax
    tax = price * quantity * 0.1  # Assuming 10% tax
    total_cost = cost_before_tax + tax  # Add tax to total cost
    return total_cost
