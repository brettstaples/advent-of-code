
arr = File.read('input.txt').split("\n")
def part_one(arr)
  arr.each_with_index do |n, i|
    n1 = n.to_i
    (i..arr.size).each do |j|
      n2 = arr[j].to_i
      if n1 + n2 == 2020
        puts n1 * n2
      end
    end
  end
end

def part_two(arr)
  arr.each_with_index do |n, i|
    n1 = n.to_i
    (i...arr.size).each do |j|
      n2 = arr[j].to_i
      (j...arr.size).each_with_index do |k|
        n3 = arr[k].to_i
        if n1 + n2 + n3 == 2020
          puts n1 * n2 * n3
        end
      end
    end
  end
end

part_one arr
part_two arr


# (1..100).each { |n| puts n }
#
# (1..100).map { |n| n * 2 }
# def some_func
#   puts 1
#   yield
#   puts 3
# end
#
# part_one
#
# some_func do
#   puts 2
# end
#
# def map!(arr)
#   (0..arr.size).each do |i|
#     arr[i] = yield
#   end
# end
#
# a = [1,2,3]
# map!(a) do |n|
#   n * 2
# end

