def process_student_data(name, grade):
    if grade > 85:
        result = "A"
    elif grade > 70:
        result = "B"
    elif grade > 50:
        result = "C"
    else:
        result = "F"

    # print("Student:", name)
    print(name + " got grade " + result)
    print(name + " got grade " + result)
