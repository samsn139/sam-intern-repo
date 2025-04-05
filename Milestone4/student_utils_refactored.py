PASS_GRADE_A = 85
PASS_GRADE_B = 70
PASS_GRADE_C = 50

def get_grade_letter(score):
    if score > PASS_GRADE_A:
        return "A"
    elif score > PASS_GRADE_B:
        return "B"
    elif score > PASS_GRADE_C:
        return "C"
    return "F"

def print_student_grade(name, score):
    grade = get_grade_letter(score)
    message = f"{name} got grade {grade}"
    print(message)
