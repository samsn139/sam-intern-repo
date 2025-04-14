def process_data(data):
    result = []
    for i in range(len(data)):
        if data[i] > 10:
            if data[i] < 20:
                result.append(data[i])
            elif data[i] > 30:
                result.append(data[i] * 2)
            else:
                result.append(data[i] / 2)
        else:
            if data[i] < 5:
                result.append(data[i] + 10)
            elif data[i] > 0:
                result.append(data[i] * 3)
            else:
                result.append(data[i] - 5)
    return result

# Refactored Code

def process_data(data):
    def process_item(item):
        if item > 10 and item < 20:
            return item
        elif item > 30:
            return item * 2
        elif item > 0 and item < 5:
            return item + 10
        elif item > 0:
            return item * 3
        else:
            return item - 5

    return [process_item(item) for item in data]
