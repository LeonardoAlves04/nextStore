const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mouses.png",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/fa113099-3631-412a-9d1c-e1ee94f5065c-2e8fvg.png",
          "https://utfs.io/f/3ad35523-262a-4880-834d-0dcac9d62d95-fz45ub.png",
          "https://utfs.io/f/694a4a98-9899-40b5-9462-b971fe588db5-zdhvry.png",
          "https://utfs.io/f/85ae65fd-b46e-4b7b-864c-4dc04ce7c813-j5zg8x.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/0fcacc59-db50-4e79-94e0-b4fe6c277aef-7bqsai.png",
          "https://utfs.io/f/e327d830-5c09-4a1f-b3f4-7aacfa50524a-ntdi8r.png",
          "https://utfs.io/f/c9ad89a1-d979-4210-9710-0a6daccf959d-uq3ts4.png",
          "https://utfs.io/f/945e7b27-202e-4a53-b110-f865ca54189c-e8h3tv.png",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed.png",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/b75aca62-4c72-4ba2-81b2-96f0cce3cbef-a8uix8.png",
          "https://utfs.io/f/3d07e759-d202-4853-afa1-e568ae64f025-68s711.png",
          "https://utfs.io/f/5550dc0b-8dfb-465c-95e9-062706bf89d0-mqewza.png",
          "https://utfs.io/f/45207b4f-514a-4b98-9654-5aa8cd08b21f-vt2f1l.png",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/5a0bd398-b2f0-439d-a58d-53ee3788db4b-5grdag.png",
          "https://utfs.io/f/b98e97b3-072b-4c79-b42a-7403155c8937-lye38p.png",
          "https://utfs.io/f/9ed95039-c497-4573-8bc1-d9fef2a28703-wl38s6.png",
          "https://utfs.io/f/6c8c1234-3fc0-457a-8f9b-50deee6378d1-g3gitx.png",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/keyboards.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/74848e5a-8ce0-4b04-947c-de825a6f39e4-bzmqc.png",
          "https://utfs.io/f/c6ec03bd-5120-41a7-817e-af1967ee4761-g5n37x.png",
          "https://utfs.io/f/371478dc-d92b-4d12-a1ed-91d4a1ca3f82-wn9t66.png",
          "https://utfs.io/f/6bb9389a-4111-4813-9749-02ecaef872c3-lw7iup.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-s.png",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/8380530a-6251-4ada-88a4-f707c72f3cdc-9u02rz.png",
          "https://utfs.io/f/99778c24-3871-48ad-99a9-f60f221258aa-qbmsq8.png",
          "https://utfs.io/f/d424bb4c-03cd-40c9-8e67-458656a1f8bf-s7ujan.png",
          "https://utfs.io/f/5aba92c7-1694-4286-bf8f-9c36b241efa5-bq7tce.png",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/fcbdcfa5-4405-4ace-9084-70f5fea69578-203nz.webp",
          "https://utfs.io/f/950cbcfb-a9d1-45b3-a9e0-e76b1ecd20b6-203o0.webp",
          "https://utfs.io/f/869530fe-3892-404f-987e-c7aee13ed51f-203o1.webp",
          "https://utfs.io/f/bc3ec7cc-aabb-4f8b-a8d2-01309cc7c9de-203o2.webp",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/96ee8c12-48b5-407b-8b6b-4bb5aa7c61a4-1ll1vs.jpg",
          "https://utfs.io/f/96ee8c12-48b5-407b-8b6b-4bb5aa7c61a4-1ll1vs.jpg",
          "https://utfs.io/f/96ee8c12-48b5-407b-8b6b-4bb5aa7c61a4-1ll1vs.jpg",
          "https://utfs.io/f/96ee8c12-48b5-407b-8b6b-4bb5aa7c61a4-1ll1vs.jpg",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/dc63b51d-11c9-448b-846b-d4a62dac74a0-naluul.png",
          "https://utfs.io/f/9c7f0f92-6260-45a6-8f0b-34027fd5259e-naluuk.png",
          "https://utfs.io/f/ef8553a8-d35b-4a7f-9d00-9312d2e0f956-naluuj.png",
          "https://utfs.io/f/989555f8-2517-42fc-8c9d-fc92ccd1a52c-naluui.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/headphones.png",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/a4a20c90-28de-4e2e-94f3-380e1e4aaa02-bikng0.webp",
          "https://utfs.io/f/561ba87e-4920-4bb1-b701-bd9d069bc6f2-biknfz.webp",
          "https://utfs.io/f/60a60d4a-d8bd-4bc2-9ccc-3c2b825a8b94-biknfy.webp",
          "https://utfs.io/f/0ca4c1fc-fd0f-42cf-b916-922630a7d065-biknfx.webp",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/d378627b-11a2-4662-b7bc-3e3f4016208c-558744.webp",
          "https://utfs.io/f/dd4ac09a-fcfc-4662-acca-c312095ab8c1-558743.webp",
          "https://utfs.io/f/3e4ca07b-7a54-4b44-8292-b56d548796ee-558742.webp",
          "https://utfs.io/f/b7c66aba-889a-4362-98bd-9fdc7a0a71e0-558741.webp",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/af05884d-3ccb-4b44-9b26-2f48103da4b2-yo44v5.png",
          "https://utfs.io/f/7bb78baf-ff79-4fd5-a30a-e6089ad9483a-jvd75q.png",
          "https://utfs.io/f/3a9ea0bb-c606-4f2b-a1fe-7378738c29df-3dqh7h.png",
          "https://utfs.io/f/09662ec9-9e69-47ee-956f-1943afb16d48-d3w8qs.png",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/cb07c132-46ee-4d62-9790-a7ca3a2cb362-ky6nep.png",
          "https://utfs.io/f/c64ffcc1-82e3-4d33-b175-416660a24056-4gjxgg.png",
          "https://utfs.io/f/adb9219e-fb90-45c0-929b-9e1e877ea624-xlaom6.png",
          "https://utfs.io/f/531aca72-c0ba-4f9a-a5a3-9fec389d3416-h3nynx.png",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/1f62ccde-bc6f-40a9-ac8d-be869c542375-ffdcuq.png",
          "https://utfs.io/f/25f6977a-6b9b-4e2f-b78d-26ab1bb7cad0-vx02sz.png",
          "https://utfs.io/f/db427669-906e-4f9b-be06-da58adefa093-mmh97w.png",
          "https://utfs.io/f/74140598-86be-4cd9-a07d-ae33e32253df-64uj9n.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/7c60a990-178e-4ab5-89a8-25fdaef75078-lgesuy.png",
          "https://utfs.io/f/0f3507a5-cf51-4a9c-b0d1-8a008a2d54ee-4ys2wp.png",
          "https://utfs.io/f/34fb0b4b-d6c4-4735-958b-980b937020dd-biun1k.png",
          "https://utfs.io/f/d27d1130-7cf0-43af-9dda-e077af542019-s0hczt.png",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mousepads.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/455576d1-e4a7-48af-b804-d3ae7ec5a12a-g8v2us.png",
          "https://utfs.io/f/621bc494-8703-411f-a1bb-eb5c8fc45b11-g8v2ur.png",
          "https://utfs.io/f/2ed15f99-4f20-41f6-a07d-7fece910dcf8-g8v2uq.png",
          "https://utfs.io/f/4080edcc-859a-4c8c-8d5f-6271e2728c8a-g8v2up.png",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/31f7bd90-7b9d-4eb4-837a-a2149d467ad2-xewj09.png",
          "https://utfs.io/f/348ce778-81b3-471d-8fa4-a0ffd68255c1-gx9t20.png",
          "https://utfs.io/f/7af56edf-463d-4e22-9009-9fa842934d7f-fn33r.png",
          "https://utfs.io/f/548e30bd-110d-400c-80af-477c08710ff8-g1zmui.png",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/997f9f6e-4ae0-4163-ad44-a9b6aed81a77-1dq7eu.png",
          "https://utfs.io/f/f015406f-2861-45ad-9bad-dc9283c55fe9-hvcxd3.png",
          "https://utfs.io/f/3e4c86e9-809f-419e-a15b-ff736203e571-ycznbc.png",
          "https://utfs.io/f/e5be20f1-be5d-4ae0-917c-19e0530a13f0-k6hopj.png",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/a447ad1f-ca11-499d-8252-ea1e205cd46a-v10456.png",
          "https://utfs.io/f/6ba94eb7-04dd-47f4-8033-3822e829e8e7-v10457.png",
          "https://utfs.io/f/1510024e-4e15-48ad-804b-ffa7851a5785-v10458.png",
          "https://utfs.io/f/0cf904e0-973d-4f3f-9777-c21093fb4e57-v10459.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/78ebe3c3-da3f-40e9-b48c-b1c28d1c3cd7-4gjxgg.png",
          "https://utfs.io/f/72813ce5-ff14-44a1-96f8-d7df2f331cbd-ky6nep.png",
          "https://utfs.io/f/af3b9ea2-18f5-4137-a9a4-d67d26f3a0dd-xlaom6.png",
          "https://utfs.io/f/78ebe3c3-da3f-40e9-b48c-b1c28d1c3cd7-4gjxgg.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/3e9d504c-07bd-4e1c-970e-0d3d1afa3d8b-1t8xzi.jpg",
          "https://utfs.io/f/a59fb82c-50df-449d-a7af-11f0a8f59f32-ti4nr2.png",
          "https://utfs.io/f/0028965c-bb93-4505-91e2-c33ffd20e02c-p1co9t.png",
          "https://utfs.io/f/c4d068e1-dde8-4299-87e3-110a86eccb9f-8jpybk.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/monitors.png",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/e6fc4c42-b09c-4676-b83b-9f54fdbec79b-4gjxgg.png",
          "https://utfs.io/f/63d6c133-b6b2-41c6-b24a-af3528bde390-ky6nep.png",
          "https://utfs.io/f/b6af2392-4c86-4bff-bc68-2cb56c3157c7-xlaom6.png",
          "https://utfs.io/f/3538ca6c-fb17-4235-adef-a9a80b3ff2d3-h3nynx.png",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/b48bc2f6-95a6-40ab-983f-d8b732f37f2a-m33eqn.png",
          "https://utfs.io/f/e1e6601c-c3f1-4261-a1c9-9c1bc75e90a5-m33epr.png",
          "https://utfs.io/f/9255a752-fe94-44c7-8882-e61124842029-m33eov.png",
          "https://utfs.io/f/1caf6791-3d62-4c94-af3d-1aafb814abb1-m33enz.png",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6c2cab99-65e3-4870-8fea-25e166b81616-bxsem0.png",
          "https://utfs.io/f/2034b4a2-98a9-48fd-abd1-46ca7466e669-4jubc9.png",
          "https://utfs.io/f/e4d8dc77-23af-4b84-97df-e65f21888642-l1h1ai.png",
          "https://utfs.io/f/f123bc29-6f1a-4d6b-9cd9-f9e321181a8d-xi0aqd.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/c4db8e34-f930-467d-9493-c33250de86c9-e7gyap.png",
          "https://utfs.io/f/4252dbba-d3d7-47c7-a1e3-f5aa6fedd7cf-2a5rnk.png",
          "https://utfs.io/f/17a61ef3-b04d-4485-8fcf-abe9f3d6776c-irshlt.png",
          "https://utfs.io/f/3dc0970e-506b-41a4-a329-c43e596a9c15-z9f7k2.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3222DGM.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/45e1e8bf-2a4c-4685-9523-7e67d9b4d3e3-os8uzx.png",
          "https://utfs.io/f/cb718198-3848-4804-8aee-886cc7840dc0-os8uzy.png",
          "https://utfs.io/f/950dbb97-2911-48af-9f85-8438d2b970ee-os8uzz.png",
          "https://utfs.io/f/270e7113-e896-4d93-b3cb-57dfd2205364-os8v00.png",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/9f2ee527-80fd-4c6a-81b0-b3462b6f5ca7-23sg0.png",
          "https://utfs.io/f/79324a82-913c-4772-ba9f-27d812a48b04-23sg1.png",
          "https://utfs.io/f/0c7979de-4625-412a-8d3f-a5949ebc7e4c-23sg2.png",
          "https://utfs.io/f/ade5ef46-97cd-464c-a7ac-9f601ff7e713-23sg3.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/efa9db13-7fd0-4e0e-ba16-3ee0c34312be-1l0evy.png",
          "https://utfs.io/f/05299c15-21ac-4fff-869e-ef202cf6fc90-1l0evz.png",
          "https://utfs.io/f/205c78e5-2204-4d77-9972-682b653c356e-1l0ew0.png",
          "https://utfs.io/f/e4be8e72-0374-4cca-820e-908f9f4b2da3-1l0ew1.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/8d85fea5-804c-4168-a80b-36840dfbea5b-1t9j91.png",
          "https://utfs.io/f/b08a520a-9353-4d98-acfe-a4da6e833125-1t9j92.png",
          "https://utfs.io/f/cf36edf4-8cea-46a1-bdc0-c89cfb238ebb-1t9j93.png",
          "https://utfs.io/f/ac51561f-f218-4feb-b977-bb18f55ce0be-1t9j94.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/b484dae1-2e8b-4ee6-a65b-ce2ef478eef5-ovtvcx.png",
          "https://utfs.io/f/d7158d91-de8e-4b72-86ce-559db0098e8a-tnngny.png",
          "https://utfs.io/f/4ae361c9-331f-4960-8ec9-86fca8a41c91-d60qpp.png",
          "https://utfs.io/f/931ed1b9-0c54-4652-aabd-ac3142357093-3blz8k.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/ca969072-2fbd-437a-abbe-ee9b69c5595f-7ngdz9.png",
          "https://utfs.io/f/b36fa85e-a0aa-4e86-95ca-c2931c4967a1-o533xi.png",
          "https://utfs.io/f/f316ad75-9300-4bd7-b4aa-20a9a246ad82-uee83d.png",
          "https://utfs.io/f/b2aacd6c-538f-46ab-93b2-00d2bd67229c-dwri54.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/ca969072-2fbd-437a-abbe-ee9b69c5595f-7ngdz9.png",
          "https://utfs.io/f/b36fa85e-a0aa-4e86-95ca-c2931c4967a1-o533xi.png",
          "https://utfs.io/f/f316ad75-9300-4bd7-b4aa-20a9a246ad82-uee83d.png",
          "https://utfs.io/f/b2aacd6c-538f-46ab-93b2-00d2bd67229c-dwri54.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
