import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const tasks = [
    {
      id: 1,
      title: 'Famous Artists Quiz',
      description: 'Match the artists with their famous works',
      points: 10,
      type: 'quiz'
    },
    {
      id: 2,
      title: 'Literary Terms',
      description: 'Identify and explain key literary devices',
      points: 15,
      type: 'writing'
    },
    {
      id: 3,
      title: 'Art Movement Timeline',
      description: 'Arrange art movements in chronological order',
      points: 10,
      type: 'sorting'
    },
    {
      id: 4,
      title: 'Shakespeare Analysis',
      description: 'Analyze a passage from Romeo and Juliet',
      points: 20,
      type: 'analysis'
    },
    {
      id: 5,
      title: 'Virtual Museum Tour',
      description: 'Explore the British Museum and answer questions',
      points: 15,
      type: 'interactive'
    }
  ];

  const handleCompleteTask = (taskId: number) => {
    if (!completedTasks.includes(taskId)) {
      const newCompleted = [...completedTasks, taskId];
      setCompletedTasks(newCompleted);
      const newProgress = (newCompleted.length / tasks.length) * 100;
      setProgress(newProgress);
      
      toast({
        title: 'Task Completed! 🎉',
        description: `You've earned ${tasks.find(t => t.id === taskId)?.points} points!`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" className="text-white" size={20} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Art & Literature Quest
              </h1>
            </div>
            <div className="hidden md:flex gap-2">
              {['home', 'tasks', 'resources', 'results'].map((section) => (
                <Button
                  key={section}
                  variant={currentSection === section ? 'default' : 'ghost'}
                  onClick={() => setCurrentSection(section)}
                  className="capitalize"
                >
                  {section === 'home' && <Icon name="Home" size={16} className="mr-2" />}
                  {section === 'tasks' && <Icon name="CheckSquare" size={16} className="mr-2" />}
                  {section === 'resources' && <Icon name="Library" size={16} className="mr-2" />}
                  {section === 'results' && <Icon name="Trophy" size={16} className="mr-2" />}
                  {section}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {currentSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 p-12 text-white shadow-2xl">
              <div className="relative z-10 max-w-3xl">
                <Badge className="mb-4 bg-white/20 hover:bg-white/30">Grade 9 English</Badge>
                <h2 className="text-5xl font-bold mb-6 animate-slide-up">
                  Discover the World of Art & Literature
                </h2>
                <p className="text-xl text-purple-100 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Embark on an educational journey through masterpieces of art and timeless literary works. 
                  Enhance your English skills while exploring culture and creativity!
                </p>
                <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <Button 
                    size="lg" 
                    onClick={() => setCurrentSection('tasks')}
                    className="bg-white text-purple-600 hover:bg-purple-50"
                  >
                    Start Quest
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => setCurrentSection('resources')}
                    className="border-white text-white hover:bg-white/10"
                  >
                    View Resources
                  </Button>
                </div>
              </div>
              <img 
                src="https://cdn.poehali.dev/projects/5162e3c8-f747-41a3-b4d3-876874a061fc/files/5a20c78a-8217-4ad8-af89-bf49d6eff649.jpg"
                alt="Art and Literature"
                className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20"
              />
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="border-purple-200 hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Target" className="text-purple-600" size={24} />
                  </div>
                  <CardTitle>Learning Goals</CardTitle>
                  <CardDescription>Master key vocabulary and cultural knowledge</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                      <span>Expand art & literature vocabulary</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                      <span>Analyze famous works in English</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                      <span>Practice reading comprehension</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Clock" className="text-blue-600" size={24} />
                  </div>
                  <CardTitle>Duration</CardTitle>
                  <CardDescription>Complete at your own pace</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">2-3 hours</div>
                  <p className="text-sm text-muted-foreground">
                    5 interactive tasks designed to enhance your English language skills through art and literature
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-orange-600" size={24} />
                  </div>
                  <CardTitle>Rewards</CardTitle>
                  <CardDescription>Track your achievement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 mb-2">70 Points</div>
                  <p className="text-sm text-muted-foreground">
                    Earn points for each completed task and get a certificate upon finishing the quest
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        )}



        {currentSection === 'tasks' && (
          <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
            <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl">Your Progress</CardTitle>
                <CardDescription>Complete all tasks to finish the quest</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{completedTasks.length} of {tasks.length} tasks completed</span>
                    <span className="text-muted-foreground">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Total Points: {completedTasks.reduce((sum, id) => sum + (tasks.find(t => t.id === id)?.points || 0), 0)} / 70</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              {tasks.map((task, index) => (
                <Card 
                  key={task.id} 
                  className={`transition-all hover:shadow-lg ${completedTasks.includes(task.id) ? 'border-green-300 bg-green-50/50' : 'border-gray-200'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          completedTasks.includes(task.id) ? 'bg-green-500' : 'bg-purple-100'
                        }`}>
                          {completedTasks.includes(task.id) ? (
                            <Icon name="Check" className="text-white" size={24} />
                          ) : (
                            <span className="text-xl font-bold text-purple-600">{task.id}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl">{task.title}</CardTitle>
                            <Badge variant="secondary" className="capitalize">
                              {task.type}
                            </Badge>
                          </div>
                          <CardDescription className="text-base">{task.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">{task.points}</div>
                        <div className="text-xs text-muted-foreground">points</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => handleCompleteTask(task.id)}
                        disabled={completedTasks.includes(task.id)}
                        className="flex-1"
                        variant={completedTasks.includes(task.id) ? 'outline' : 'default'}
                      >
                        {completedTasks.includes(task.id) ? (
                          <>
                            <Icon name="CheckCircle2" size={16} className="mr-2" />
                            Completed
                          </>
                        ) : (
                          <>
                            <Icon name="Play" size={16} className="mr-2" />
                            Start Task
                          </>
                        )}
                      </Button>
                      {task.id === 1 && (
                        <Button variant="outline" className="flex-1">
                          <Icon name="ExternalLink" size={16} className="mr-2" />
                          View Instructions
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {currentSection === 'resources' && (
          <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Library" size={32} className="text-blue-600" />
                  Learning Resources
                </CardTitle>
                <CardDescription>Explore these materials to enhance your understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="art" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="art">Art Resources</TabsTrigger>
                    <TabsTrigger value="literature">Literature</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="art" className="space-y-4 mt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Icon name="Palette" size={20} className="text-purple-600" />
                            Virtual Museums
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <a href="https://www.britishmuseum.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                            <Icon name="ExternalLink" size={16} />
                            The British Museum
                          </a>
                          <a href="https://www.metmuseum.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                            <Icon name="ExternalLink" size={16} />
                            The Metropolitan Museum
                          </a>
                          <a href="https://artsandculture.google.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                            <Icon name="ExternalLink" size={16} />
                            Google Arts & Culture
                          </a>
                        </CardContent>
                      </Card>

                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Icon name="Image" size={20} className="text-blue-600" />
                            Art Movements Guide
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <img 
                            src="https://cdn.poehali.dev/projects/5162e3c8-f747-41a3-b4d3-876874a061fc/files/35e70744-2b88-40d0-9879-13e9deafa279.jpg"
                            alt="Art Gallery"
                            className="w-full h-32 object-cover rounded-lg mb-3"
                          />
                          <p className="text-sm text-muted-foreground">
                            Learn about Impressionism, Renaissance, Modern Art, and more
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="literature" className="space-y-4 mt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Icon name="BookOpen" size={20} className="text-purple-600" />
                            Classic Literature
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <a href="https://www.gutenberg.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                            <Icon name="ExternalLink" size={16} />
                            Project Gutenberg
                          </a>
                          <a href="https://shakespeare.folger.edu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                            <Icon name="ExternalLink" size={16} />
                            Folger Shakespeare Library
                          </a>
                          <a href="https://www.poetryfoundation.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                            <Icon name="ExternalLink" size={16} />
                            Poetry Foundation
                          </a>
                        </CardContent>
                      </Card>

                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Icon name="FileText" size={20} className="text-blue-600" />
                            Literary Terms
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <img 
                            src="https://cdn.poehali.dev/projects/5162e3c8-f747-41a3-b4d3-876874a061fc/files/5b9a4aae-cc06-4810-b1ca-830bb43331ae.jpg"
                            alt="Literature Resources"
                            className="w-full h-32 object-cover rounded-lg mb-3"
                          />
                          <p className="text-sm text-muted-foreground">
                            Dictionary of metaphors, similes, and other literary devices
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="tools" className="space-y-4 mt-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                            <Icon name="Languages" size={24} className="text-green-600" />
                          </div>
                          <CardTitle className="text-lg">Dictionary</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3">
                            Cambridge English Dictionary for definitions
                          </p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href="https://dictionary.cambridge.org/" target="_blank" rel="noopener noreferrer">
                              Open Dictionary
                            </a>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                            <Icon name="BookMarked" size={24} className="text-orange-600" />
                          </div>
                          <CardTitle className="text-lg">Notebook</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3">
                            Keep notes and vocabulary lists
                          </p>
                          <Button variant="outline" size="sm" className="w-full">
                            Open Notes
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                            <Icon name="HelpCircle" size={24} className="text-purple-600" />
                          </div>
                          <CardTitle className="text-lg">Help Center</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3">
                            Get help with tasks and technical issues
                          </p>
                          <Button variant="outline" size="sm" className="w-full">
                            Get Help
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {currentSection === 'results' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-purple-50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={40} className="text-white" />
                </div>
                <CardTitle className="text-4xl">Quest Results</CardTitle>
                <CardDescription className="text-lg">Review your achievement and performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      {completedTasks.length}/{tasks.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Tasks Completed</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {completedTasks.reduce((sum, id) => sum + (tasks.find(t => t.id === id)?.points || 0), 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Points</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      {Math.round(progress)}%
                    </div>
                    <div className="text-sm text-muted-foreground">Completion Rate</div>
                  </div>
                </div>

                {completedTasks.length === tasks.length ? (
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-xl text-white text-center">
                    <Icon name="PartyPopper" size={48} className="mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-3">Congratulations! 🎉</h3>
                    <p className="text-xl mb-6">
                      You've successfully completed the Art & Literature Quest!
                    </p>
                    <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                      <Icon name="Download" size={20} className="mr-2" />
                      Download Certificate
                    </Button>
                  </div>
                ) : (
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Target" size={24} className="text-blue-600" />
                      Keep Going!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      You're making great progress! Complete the remaining {tasks.length - completedTasks.length} task(s) 
                      to finish the quest and earn your certificate.
                    </p>
                    <Button onClick={() => setCurrentSection('tasks')} className="bg-blue-600">
                      Continue Tasks
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                )}

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Performance Summary</h3>
                  <div className="space-y-4">
                    {tasks.map(task => (
                      <div key={task.id} className="flex items-center justify-between pb-3 border-b last:border-0">
                        <div className="flex items-center gap-3">
                          {completedTasks.includes(task.id) ? (
                            <Icon name="CheckCircle2" size={20} className="text-green-500" />
                          ) : (
                            <Icon name="Circle" size={20} className="text-gray-300" />
                          )}
                          <span className="font-medium">{task.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={completedTasks.includes(task.id) ? 'default' : 'secondary'}>
                            {completedTasks.includes(task.id) ? `${task.points} pts` : 'Pending'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="MessageSquare" size={24} className="text-purple-600" />
                    Feedback
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Share your thoughts about this WebQuest to help us improve the learning experience.
                  </p>
                  <Button variant="outline">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Send Feedback
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Art & Literature Quest</h3>
              <p className="text-purple-200">
                An interactive educational platform for Grade 9 students to explore English through art and literature.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-purple-200">
                <li><a href="#" className="hover:text-white transition-colors">About This Quest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Teacher's Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Additional Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <p className="text-purple-200 mb-4">
                Contact your teacher if you have questions about the tasks or need technical support.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Mail" size={16} className="mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-300">
            <p>© 2024 Art & Literature Quest. Educational Resource for Grade 9 English.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;