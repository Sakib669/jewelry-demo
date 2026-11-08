import fs from "node:fs";
import path from "node:path";
import https from "node:https";

const images = [
  {
    name: "hero-ring.jpg",
    url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=85&w=1400&auto=format&fit=crop",
  },
  {
    name: "hero-model.jpg",
    url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=85&w=700&auto=format&fit=crop",
  },
  {
    name: "hero-bracelet-deal.jpg",
    url: "https://images.unsplash.com/photo-1611591475806-c8541a7c3ce9?q=85&w=600&auto=format&fit=crop",
  },
  {
    name: "collection-bracelets.jpg",
    url: "https://images.unsplash.com/photo-1611591475806-c8541a7c3ce9?q=85&w=800&auto=format&fit=crop",
  },
  {
    name: "collection-rings.jpg",
    url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=85&w=800&auto=format&fit=crop",
  },
  {
    name: "collection-earrings.jpg",
    url: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=85&w=800&auto=format&fit=crop",
  },
  {
    name: "designer-portrait.jpg",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=85&w=800&auto=format&fit=crop",
  },
  {
    name: "product-heart-locket.jpg",
    url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=85&w=700&auto=format&fit=crop",
  },
  {
    name: "product-layer-necklace.jpg",
    url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=85&w=700&auto=format&fit=crop",
  },
  {
    name: "product-circle-pendant.jpg",
    url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=85&w=700&auto=format&fit=crop",
  },
  {
    name: "product-gold-bracelet.jpg",
    url: "https://images.unsplash.com/photo-1611591475806-c8541a7c3ce9?q=85&w=700&auto=format&fit=crop",
  },
  {
    name: "testimonial-emily.jpg",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=85&w=400&auto=format&fit=crop",
  },
  {
    name: "testimonial-olivia.jpg",
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=85&w=400&auto=format&fit=crop",
  },
  {
    name: "holiday-diamond-ring.jpg",
    url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=85&w=900&auto=format&fit=crop",
  },
];

const targetDir = path.resolve(process.cwd(), "public/images");

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${response.statusCode}`));
      }
      response.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log("Downloading curated local jewelry assets to public/images/...");
  for (const item of images) {
    const dest = path.join(targetDir, item.name);
    try {
      await download(item.url, dest);
      const stat = fs.statSync(dest);
      console.log(`✓ Saved ${item.name} (${Math.round(stat.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
    }
  }
}

run();
