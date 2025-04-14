def process_order(order):
    total = 0
    for item in order["items"]:
        if item["category"] == "electronics":
            total += item["price"] * 0.9  # 10% discount for electronics
        elif item["category"] == "clothing":
            total += item["price"] * 0.8  # 20% discount for clothing
        elif item["category"] == "books":
            total += item["price"]  # No discount for books

    # Apply tax
    total_with_tax = total * 1.1  # 10% tax

    # Check if customer is eligible for free shipping
    if order["total"] > 100:
        shipping_cost = 0
    else:
        shipping_cost = 10

    # Final total with shipping
    final_total = total_with_tax + shipping_cost
    return final_total

# Refactored Code

def calculate_item_total(item):
    if item["category"] == "electronics":
        return item["price"] * 0.9  # 10% discount for electronics
    elif item["category"] == "clothing":
        return item["price"] * 0.8  # 20% discount for clothing
    elif item["category"] == "books":
        return item["price"]  # No discount for books

def apply_tax(total):
    return total * 1.1  # 10% tax

def calculate_shipping(order_total):
    if order_total > 100:
        return 0  # Free shipping for orders above 100
    else:
        return 10  # Flat shipping cost for smaller orders

def process_order(order):
    total = sum(calculate_item_total(item) for item in order["items"])
    total_with_tax = apply_tax(total)
    shipping_cost = calculate_shipping(order["total"])
    final_total = total_with_tax + shipping_cost
    return final_total
