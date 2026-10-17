'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { 
  BsEmojiSunglasses, 
  BsEmojiExpressionless, 
  BsEmojiDizzy, 
 
  BsEmojiHeartEyes,

  BsEmojiSurprise
} from 'react-icons/bs';
import { MdOutlineLightbulb } from 'react-icons/md';
import { FaXmark, FaRocket, FaGraduationCap, FaLaptopCode, FaUserAstronaut, FaEnvelopeOpenText } from 'react-icons/fa6';

import profileImg from '../../assets/ycb3ja.jpg (1).jpeg';

interface Story {
  id: number;
  title: string;
  theme: string;
  emojiIcon: React.ReactNode;
  badgeIcon: React.ReactNode;
  lesson: string;
  paragraphs: string[];
  positionClass: string; 
}

const storiesData: Story[] = [
  {
    id: 1,
    title: `The Boy Who Dreamed Beyond His City`,
    theme: `Dreams, ambition, & self-belief`,
    emojiIcon: <BsEmojiSunglasses className={`text-2xl text-amber-400`} />,
    badgeIcon: <FaRocket className={`text-base text-red-500`} />,
    lesson: `Never be ashamed of starting small. Every great achievement begins with something that does not yet exist.`,
    positionClass: `top-0 left-1/2 -translate-x-1/2 -translate-y-6 md:-translate-y-10`,
    paragraphs: [
      `There was a young boy named Rumi who lived in Narsingdi, Bangladesh.`,
      `He was surrounded by the ordinary things of life: school, examinations, family responsibilities, and the familiar streets of his hometown. But inside his mind, there was a world much bigger than the one around him.`,
      `He dreamed about technology companies that served millions of people. He wondered how software engineers built the applications people used every day. He imagined studying at a world-class university, exploring the mysteries of space, and creating something that could make a difference.`,
      `Sometimes, his dreams seemed much bigger than his current circumstances. He was still a student. He was still learning. He did not have unlimited money, unlimited resources, or all the answers.`,
      `But he had questions. And he wanted to find the answers. He started learning graphic design. Later, he explored web development and programming. Every new skill introduced him to another possibility.`,
      `Eventually, he wanted to do more than learn from what other people had created. He wanted to build something of his own. That ambition became part of his journey with OpenyHool.`,
      `Of course, having an idea was only the beginning. Turning it into a useful and sustainable business would require patience, discipline, and many lessons.`,
      `Some days, his progress might feel exciting. On other days, the distance between his current situation and his dreams might seem overwhelming.`,
      `But perhaps that is what makes a dream meaningful. It gives you somewhere to go, even when you cannot see the entire road.`,
      `One day, Rumi might look back at his younger self and remember the boy who dreamed of building something important. He might realize that the most valuable part of the journey was not simply how far he traveled. It was how much he learned along the way.`,
      `Because a person's beginning does not have to determine the limits of their future.`
    ]
  },
  {
    id: 2,
    title: `The University Beyond His Budget`,
    theme: `Financial limits, hope, & determination`,
    emojiIcon: <BsEmojiExpressionless className={`text-2xl text-yellow-400`} />,
    badgeIcon: <FaGraduationCap className={`text-base text-yellow-500`} />,
    lesson: `Financial limitations are real, but they do not make your ambitions meaningless. Face the facts, prepare carefully, and keep more than one path open.`,
    positionClass: `top-1/4 right-0 md:-right-8 -translate-y-1/2`,
    paragraphs: [
      `Rumi had a dream. He wanted to study at a world-class university. He imagined walking through a university campus, entering a modern laboratory, meeting brilliant students, and learning from professors whose research could change the world.`,
      `Harvard was one of the names that captured his imagination. But there was a problem. Dreaming about studying abroad was one thing. Finding a realistic way to afford it was another.`,
      `Tuition fees, living expenses, travel costs, and other requirements could make the dream feel distant. He could not simply ignore those realities.`,
      `So he started asking questions. Could he receive a scholarship? Were there universities in Europe with lower tuition fees? Could he study in Bangladesh first and apply for international opportunities later? What qualifications would he need?`,
      `Every answer brought new information, but sometimes it also brought new questions. There would be no guarantee that his first plan would work.`,
      `He might discover that a university was too expensive. He might learn that a scholarship had requirements he did not yet meet. He might need to improve his academic record, English proficiency, or extracurricular profile.`,
      `And perhaps that would hurt. Because when you want something deeply, discovering that it is difficult to achieve can feel like discovering that the world is closing a door in front of you.`,
      `But Rumi still had choices. He could strengthen his academic foundation during Class XI and XII. He could research financial aid carefully, improve his English, develop his programming skills, and prepare applications that reflected his real achievements.`,
      `He could explore multiple universities instead of depending on a single dream. Harvard could remain an ambition without becoming his only definition of success.`,
      `And if his path changed, that would not necessarily mean his dream of receiving a good education had failed. It would mean he had found another way to pursue it.`,
      `Perhaps one day he would enter the campus he had imagined. Perhaps he would study somewhere else and discover opportunities he had never considered.`,
      `Either way, the important thing was to keep turning his ambition into a practical plan. Sometimes, the first step toward a dream is not finding the perfect opportunity. It is learning how to prepare for the opportunities that might become available.`
    ]
  },
  {
    id: 3,
    title: `Three Hours Every Night`,
    theme: `Hard work, sacrifice, & focus`,
    emojiIcon: <BsEmojiDizzy className={`text-2xl text-blue-400`} />,
    badgeIcon: <FaLaptopCode className={`text-base text-blue-500`} />,
    lesson: `You do not have to build your entire future tonight. Build one useful thing, learn one important lesson, and return tomorrow with a clearer mind.`,
    positionClass: `bottom-8 right-4 md:right-8`,
    paragraphs: [
      `It was 7 PM. Rumi sat down in front of his computer. The screen was filled with code, unfinished tasks, and ideas waiting to be developed.`,
      `For the next three hours, he planned to work on OpenyHool and Zaneyon.`,
      `Some evenings, everything seemed possible. He could imagine new software tools, better websites, useful AI features, and a company that might one day serve people far beyond Bangladesh.`,
      `Other evenings were different. A piece of code refused to work. A feature took longer than expected. An idea that sounded brilliant in his mind became difficult to implement in reality.`,
      `And sometimes, the work that looked simple at the beginning turned into hours of problem-solving. That was the less glamorous side of building something.`,
      `People often notice the title of a founder or CEO. They see the company name, the website, or the finished product. But they do not always see the learning that happens before a product works.`,
      `They do not see the mistakes, the research, the debugging, or the moments when the person building it has to admit that he does not yet know enough.`,
      `Rumi was still a student. He had examinations to prepare for, subjects to understand, and a future to plan. Building a company while continuing his education meant learning how to manage competing priorities.`,
      `He could not afford to treat every evening as an unlimited resource. He had to learn when to work, when to study, when to rest, and when to accept that a task would have to wait until tomorrow.`,
      `Slowly, he could begin to understand something important. His progress would not be measured by how exhausted he became. It would be measured by what he learned, what he completed, and how consistently he improved.`,
      `One working feature was better than ten ideas that never left his notebook. One solved problem was better than an evening spent pretending to understand something he had not yet learned. And one honest improvement was more valuable than a title without meaningful work behind it.`,
      `The three hours would pass. The computer would eventually be turned off. But if Rumi had learned something useful that evening, the time would not have been wasted.`,
      `A dream becomes more than a dream when you begin taking responsibility for the work required to achieve it.`
    ]
  },
  {
    id: 4,
    title: `The Boy Who Looked at the Stars`,
    theme: `Curiosity, science, & inquiry`,
    emojiIcon: <BsEmojiSurprise className={`text-2xl text-purple-400`} />,
    badgeIcon: <FaUserAstronaut className={`text-base text-purple-400`} />,
    lesson: `Keep your curiosity alive, but give your ideas the strongest foundation you can. A good researcher is not someone who is always right. A good researcher is someone who is willing to find out.`,
    positionClass: `bottom-8 left-4 md:left-8`,
    paragraphs: [
      `Imagine a quiet night in Bangladesh. Above the rooftops, the sky stretches into darkness.`,
      `Some people look at the stars and see beauty. Others see distant objects, enormous distances, and the history of the universe. Rumi sees questions.`,
      `Is there life beyond Earth? How much do we really understand about the universe? Could artificial intelligence help scientists discover something that human researchers have overlooked? What would it take to develop a genuinely new scientific idea?`,
      `These questions have encouraged him to explore physics, astrobiology, and the possibility of developing his own hypothesis.`,
      `But a scientific idea is only the beginning of a much longer journey. If Rumi wants to become a serious researcher, he must learn the mathematics behind the questions that interest him. He must study existing research, understand established scientific principles, and investigate whether his ideas are consistent with the available evidence.`,
      `Sometimes, research will support an initial expectation. Sometimes, it will reveal that someone else has already explored the same idea. And sometimes, the evidence will show that the original hypothesis was wrong.`,
      `That last possibility can be difficult to accept. After all, people often become emotionally attached to their ideas. They want their discoveries to be important. They want their work to prove that their effort was worthwhile.`,
      `But science asks for something more difficult than belief. It asks us to test what we believe.`,
      `A researcher must be willing to investigate an idea honestly, even when the results are disappointing.`,
      `Rumi's interest in NASA and space research could motivate him to develop the necessary academic foundation and explore relevant research opportunities.`,
      `He does not need to solve the mysteries of the universe immediately. He needs to learn how to ask better questions, understand existing answers, and investigate what remains unknown.`,
      `Perhaps one day, he will contribute to a meaningful scientific project. Perhaps his research will lead him in a direction he cannot yet imagine.`,
      `For now, the most important discovery may be the realization that curiosity becomes powerful when it is supported by knowledge and evidence. The universe does not reveal its secrets simply because we dream about them. We discover more about it by learning how to ask questions that can be tested.`
    ]
  },
  {
    id: 5,
    title: `A Letter to My Future Self`,
    theme: `Identity, growth, & true success`,
    emojiIcon: <BsEmojiHeartEyes className={`text-2xl text-emerald-400`} />,
    badgeIcon: <FaEnvelopeOpenText className={`text-base text-emerald-400`} />,
    lesson: `Dear future me, I hope you have built a life that makes you proud, not just because of what you achieved, but because of the person you became along the way.`,
    positionClass: `top-1/4 left-0 md:-left-8 -translate-y-1/2`,
    paragraphs: [
      `Dear Future Rumi, I do not know where you are reading this letter.`,
      `Perhaps you are sitting in an office, working on a company you once dreamed of building. Perhaps you are studying at a university, exploring the subjects that fascinated you when you were younger. Perhaps you are conducting research, developing software, or working on something that your younger self could barely imagine. Or perhaps your life has taken a completely different direction.`,
      `Right now, I am still at the beginning. I am studying in Class XI. I am learning new skills, working on OpenyHool, and trying to understand how I can turn my ambitions into something real.`,
      `I have dreams about education, technology, business, and science. Some of those dreams might come true. Others might change as I learn more about the world and about myself.`,
      `I hope you remember this version of me. Not because I have already achieved everything I want, but because I am trying to begin.`,
      `I hope you remember the excitement of learning something new. I hope you remember the plans that kept you thinking long after you had closed your computer. I hope you remember that there was a time when many things seemed difficult because you had not yet learned how to do them. And I hope you remember that it was okay not to know everything.`,
      `I want you to build something meaningful. I want you to become skilled enough to solve real problems. I want you to pursue education that challenges you, research that teaches you, and work that makes a positive difference in people's lives.`,
      `But I also hope you have learned that your worth is not determined by your job title, your company's valuation, your university's name, or how many people recognize you.`,
      `Those things may matter to your ambitions. They do not tell the whole story of who you are.`,
      `I hope you have learned to take care of your health, respect your family, value honest friendships, and treat people well even when there is nothing to gain from them.`,
      `I hope you have become more patient. I hope you have learned to accept mistakes without allowing them to define you. And I hope you have discovered that changing your plans does not always mean giving up. Sometimes, it means growing.`,
      `One day, when you look back at your younger self, I hope you will not judge him only by the things he failed to achieve. I hope you will recognize the courage it took to start, the patience it took to learn, and the honesty it took to keep improving.`,
      `Because I cannot promise that every dream will come true. But I can make a promise about the person I am trying to become.`,
      `I will keep learning. I will keep questioning. I will keep building. And when I make mistakes, I will try to learn from them instead of letting them decide my future.`
    ]
  }
];

const MyStories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const handleSelectStory = (story: Story) => {
    if (selectedStory?.id === story.id) {
      setSelectedStory(null);
    } else {
      setSelectedStory(story);
    }
  };

  return (
    <section className={`relative text-white py-24 px-6 font-sans select-none overflow-hidden min-h-[900px] flex flex-col justify-center items-center`} id='Story'>
      
      {/* Header */}
      <div className={`text-center max-w-3xl mx-auto mb-16 z-10`}>
        <span className={`text-xs tracking-[0.3em] text-red-500 uppercase font-sans block mb-3`}>
          {`MY JOURNEY & MINDSET`}
        </span>
        <h2 className={`text-4xl md:text-6xl font-italiana tracking-tight text-white leading-tight`}>
          {`The Stories Behind`} <br /> {`The Code`}
        </h2>
        <p className={`text-gray-400 text-sm md:text-base mt-4`}>
          {`Click any story node below to open the complete story reading section.`}
        </p>
      </div>

      {/* Interactive Story Orbit / Web Area */}
      <div className={`relative w-full max-w-4xl h-[480px] md:h-[580px] flex items-center justify-center`}>
        
        {/* Decorative Concentric Rings */}
        <div className={`absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-gray-800/80 pointer-events-none`} />
        <div className={`absolute w-[420px] h-[420px] md:w-[560px] md:h-[560px] rounded-full border border-gray-800/40 pointer-events-none`} />
        <div className={`absolute w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800/60 to-transparent pointer-events-none`} />
        <div className={`absolute h-full w-[1px] bg-gradient-to-b from-transparent via-gray-800/60 to-transparent pointer-events-none`} />

        {/* Center Node (YOU) */}
        <div className={`relative z-20 flex flex-col items-center`}>
          <div className={`relative p-1 rounded-full bg-gradient-to-tr from-red-600 via-gray-800 to-red-900 shadow-[0_0_35px_rgba(239,68,68,0.3)]`}>
            <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-red-500 relative bg-black`}>
              <Image
                src={profileImg}
                alt={`Md Rumi Parvez`}
                width={500}
                height={500}
                className={`object-cover`}
                priority
              />
            </div>
            
          </div>
          <h3 className={`text-2xl font-italiana text-white mt-3 tracking-wide`}>{`Md Rumi Parvez`}</h3>
          <span className={`text-xs text-red-400 font-sans`}>{`Full-Stack Developer`}</span>
        </div>

        {/* Clickable Orbiting Story Nodes */}
        {storiesData.map((story) => {
          const isSelected = selectedStory?.id === story.id;

          return (
            <div
              key={story.id}
              onClick={() => handleSelectStory(story)}
              className={`absolute z-30 cursor-pointer group transition-all duration-300 ${story.positionClass}`}
            >
              <div className={`flex flex-col items-center`}>
                <div 
                  className={`relative p-3.5 md:p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 flex items-center justify-center ${
                    isSelected 
                      ? `bg-red-950/80 border-red-500 scale-125 ` 
                      : `bg-black/80 border-gray-800 group-hover:border-red-500 group-hover:bg-red-950/40 group-hover:scale-110 `
                  }`}
                >
                  {story.emojiIcon}
                  
                </div>
                <span className={`mt-2 text-xs font-fjalla max-w-[120px] text-center line-clamp-1 transition-colors ${
                  isSelected ? `text-red-400 font-bold` : `text-gray-300 group-hover:text-white`
                }`}>
                  {story.title}
                </span>
              </div>
            </div>
          );
        })}

      </div>

      {/* Selected Story Details Drawer/Section (Appears Cleanly Below Net Web) */}
      {selectedStory && (
        <div className={`w-full max-w-4xl mt-10 p-6 md:p-10 rounded-3xl border border-red-800/80 bg-black/95 text-white shadow-2xl backdrop-blur-xl animate-fadeIn z-30`}>
          
          {/* Header */}
          <div className={`flex items-start justify-between pb-6 mb-6 border-b border-gray-800`}>
            <div className={`flex items-center gap-4`}>
              <div className={`p-3 rounded-2xl bg-red-950/80 border border-red-800/60`}>
                {selectedStory.emojiIcon}
              </div>
              <div>
                <h3 className={`text-4xl font-italiana text-white leading-tight`}>{selectedStory.title}</h3>
                <span className={`text-xs text-red-400 font-sans tracking-wider uppercase mt-1 block`}>
                  {selectedStory.theme}
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              className={`p-2.5 rounded-xl border border-gray-800 bg-gray-900/80 hover:bg-red-900/60 hover:border-red-600 text-gray-400 hover:text-white transition-all duration-300 cursor-pointer`}
            >
              <FaXmark className={`text-lg`} />
            </button>
          </div>

          {/* Full Paragraphs */}
          <div className={`space-y-4 text-sm md:text-base text-gray-300 font-libre leading-relaxed`}>
            {selectedStory.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Lesson Footer Box */}
          <div className={`mt-8 pt-4 p-5 rounded-2xl bg-red-950/30 border border-red-900/50 flex items-start gap-3`}>
            <MdOutlineLightbulb className={`text-2xl text-red-400 shrink-0 mt-0.5`} />
            <div>
              <span className={`text-xs font-bold text-red-400 uppercase tracking-widest block mb-1`}>
                {`THE LESSON`}
              </span>
              <p className={`text-sm text-gray-200 italic font-medium leading-relaxed`}>
                {`"${selectedStory.lesson}"`}
              </p>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};

export default MyStories;