arr = File.read('input.txt').split("\n")

def part_one(arr, seq)
  line_number = 0
  line_index = 0
  total = 0

  while line_number < arr.size
    if arr[line_number][line_index % arr[line_number].size] == '#'
      total += 1
    end
    line_index += seq['x']
    line_number += seq['y']
  end

  total
end

def part_two(arr)
  sequences = { 1 => { 'x' => 1, 'y' => 1},
                2 => { 'x' => 3, 'y' => 1 },
                3 => { 'x' => 5, 'y' => 1 },
                4 => { 'x' => 7, 'y' => 1 },
                5 => { 'x' => 1, 'y' => 2 } }

  overall_total = 1
  sequences.each do |key, value|
    overall_total *= part_one(arr, value)
  end

  puts overall_total
end

puts part_one(arr, { 'x' => 3, 'y' => 1} )
part_two(arr)