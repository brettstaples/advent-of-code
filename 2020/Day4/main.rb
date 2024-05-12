input_contents = File.read('input.txt').split(/\n\n/).each do |line|
  line.tr("\n", '')
end

def part_one(input_contents)
  total = 0
  input_contents.each_with_index do |line, index|
    id_card = line.split(' ')
    if id_card.size >= 8
      total += 1
    elsif id_card.size == 7
      unless line.match(/cid/)
        total += 1
      end
    end
  end

  puts total
end

def part_two(input_contents)
  validations = {
    "byr" => { "digits" => 4, "min" => 1920, "max" => 2002 },
    "iyr" => { "digits" => 4, "min" => 2010, "max" => 2020 },
    "eyr" => { "digits" => 4,  "min" => 2020, "max" => 2030 },
    "hgt" => { "cm" => { "min" => 150, "max" => 193 }, "in" => { "min" => 59, "max" => 76 }},
    "hcl" => { "numberOfCharacter" => 6, "regex" => /^#[0-9a-f]{6}$/ },
    "ecl" => {  }
  }
  total = 0
  input_contents.each_with_index do |line, index|
    id_card = line.split(' ')
    if id_card.size >= 7
      p id_card

    end
  end

  puts total
end

# part_one(input_contents)
part_two(input_contents)

