# frozen_string_literal: true

arr = File.read('input.txt').split("\n")
def part_one(arr)
  amount_of_passwords = 0
  arr.each_with_index do |element, index|
    line = arr[index]
    first = element.index('-')
    second = element.index(' ')
    third = element.index(':')
    min = line[0, first].to_i
    max = line[first + 1, second].to_i
    char = line[third - 1]
    occurrences = line[third + 1, line.size].count(char)
    unless occurrences < min || occurrences > max
      amount_of_passwords += 1
    end
  end

  puts amount_of_passwords
end

def part_two(arr)
  amount_of_passwords = 0
  arr.each_with_index do |element, index|
    line = arr[index]
    first = element.index('-')
    second = element.index(' ')
    third = element.index(':')
    min = line[0, first].to_i
    max = line[first + 1, second].to_i
    char = line[third - 1]
    input_str = line[third + 2, line.size]
    if (input_str[min - 1] == char && input_str[max - 1] != char) || (input_str[max - 1] == char && input_str[min - 1] != char)
      amount_of_passwords += 1
    end
  end

  puts amount_of_passwords
end

part_one arr
part_two arr
