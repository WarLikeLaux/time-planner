

file="$1"
if [ -z "$file" ]; then
	echo "Usage: $0 <filename>"
	exit 1
fi

echo "Safely removing comments from $file..."

cp "$file" "$file.backup"

sed -i '/data:image\/svg\+xml/!s/<!--.*-->//g' "$file"

sed -i 's/^\s*\/\/.*$//' "$file"
sed -i 's/\([[:space:]]\)\/\/[^"'"'"']*$/\1/' "$file"

sed -i 's/\/\*[^*]*\*\+\([^/*][^*]*\*\+\)*\///g' "$file"

echo "Comments removed safely. Backup saved as $file.backup"
echo "Please verify the file is still valid before deleting the backup."
