def calculate_order_total(order_items):
    total = 0
    discount = 0
    shipping = 0
    for item in order_items:
        if item["type"] == "electronics":
            discount += item["price"] * 0.1
        elif item["type"] == "clothing":
            discount += item["price"] * 0.05
        if item["price"] > 100:
            shipping += 10
        else:
            shipping += 5
        total += item["price"]
    
    total -= discount
    total += shipping
    return total

# Refactored Code

def calculate_discount(order_items):
    discount = 0
    for item in order_items:
        if item["type"] == "electronics":
            discount += item["price"] * 0.1
        elif item["type"] == "clothing":
            discount += item["price"] * 0.05
    return discount

def calculate_shipping(order_items):
    shipping = 0
    for item in order_items:
        if item["price"] > 100:
            shipping += 10
        else:
            shipping += 5
    return shipping

def calculate_order_total(order_items):
    total = sum(item["price"] for item in order_items)
    discount = calculate_discount(order_items)
    shipping = calculate_shipping(order_items)
    
    total -= discount
    total += shipping
    return total
