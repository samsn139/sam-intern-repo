def get_discounted_price_for_electronics(items):
    total = 0
    for item in items:
        if item["category"] == "electronics":
            total += item["price"] * 0.9  # 10% discount

    return total

def get_discounted_price_for_clothing(items):
    total = 0
    for item in items:
        if item["category"] == "clothing":
            total += item["price"] * 0.95  # 5% discount

    return total


# Apply the DRY principle

def get_discounted_price(items, category, discount_percentage):
    total = 0
    for item in items:
        if item["category"] == category:
            total += item["price"] * (1 - discount_percentage)
    return total

# Usage:
electronics_total = get_discounted_price(items, "electronics", 0.1)
clothing_total = get_discounted_price(items, "clothing", 0.05)
