import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.anislag.createMany({
    data: [
      {
      assessor_no: 4,
      cadastral_no: '8027 A',
      arp_A: null,
      arp_B: null,
      arp_C: '01364',
      arp_D: null,
      arp_E: '01541',
      name_owner: 'TEOFILO GENERALAO',
      title_no: null,
      area: '1.5282',
      classification_no: 'A/R',
      improvement_1: '1',
      improvement_2: '1365',
      mch: null,
      oth: null,
      cancel: 'yes',
      index_no: '003-001',
      barangay: 'ANISLAG',
      cancel_reason: 'subdivision',
      cancel_details: { assessor_nos: ['032', '033'] },
    },
    {
      assessor_no: 5,
      cadastral_no: '8027 B',
      arp_A: null,
      arp_B: null,
      arp_C: '01365',
      arp_D: null,
      arp_E: '01542',
      name_owner: 'JUAN DELA CRUZ',
      title_no: null,
      area: '1.0000',
      classification_no: 'A',
      improvement_1: null,
      improvement_2: null,
      mch: null,
      oth: null,
      cancel: 'yes',
      index_no: '003-002',
      barangay: 'ANISLAG',
      cancel_reason: 'transfer',
      cancel_details: { assessor_no: '034' },
    },
  
  
  
  ]
  });


  console.log('✅ Seed data inserted!');
}

seed()
  .catch((e) => {
    console.error('❌ Error in seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
