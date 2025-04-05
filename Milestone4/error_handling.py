# no error handling
def add(a, b):
    return a + b

# perform error handling
def refactored_add(a, b):
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise ValueError("Both inputs must be numbers.")
    return a + b
