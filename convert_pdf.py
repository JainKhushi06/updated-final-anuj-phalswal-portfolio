import fitz
import os

pdf_path = "public/magazine/wyf.pdf"
output_folder = "public/magazine/pages"

os.makedirs(output_folder, exist_ok=True)

pdf = fitz.open(pdf_path)

for page_number, page in enumerate(pdf):
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
    output_path = os.path.join(
        output_folder,
        f"page-{page_number + 1}.jpg"
    )
    pix.save(output_path)
    print(f"Created: {output_path}")

pdf.close()

print("Done! All pages converted.")