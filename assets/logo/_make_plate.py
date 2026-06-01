from PIL import Image, ImageDraw

logo_dir = r"C:\Users\brees\Claude Projects\Jackson Veterinary Clinic\assets\logo"
src = Image.open(logo_dir + r"\logo-full.png").convert("RGBA")

SS = 2
SIZE = 1200 * SS
cream = (247, 242, 233, 255)
ring = (192, 184, 168, 255)

canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
d = ImageDraw.Draw(canvas)

cx = cy = SIZE // 2
R = int(SIZE * 0.495)
d.ellipse([cx - R, cy - R, cx + R, cy + R], fill=cream)

rw = int(6 * SS)
ri = int(SIZE * 0.470)
d.ellipse([cx - ri, cy - ri, cx + ri, cy + ri], outline=ring, width=rw)

inset = int(SIZE * 0.86)
badge = src.resize((inset, inset), Image.LANCZOS)
ox = (SIZE - inset) // 2
canvas.alpha_composite(badge, (ox, ox))

out = canvas.resize((1200, 1200), Image.LANCZOS)
out.save(logo_dir + r"\logo-plate.png")
print("Saved cream plate:", out.size)

bbox = src.getbbox()
crop = src.crop(bbox)
crop.save(logo_dir + r"\logo-badge.png")
print("Saved tight badge crop:", crop.size)
