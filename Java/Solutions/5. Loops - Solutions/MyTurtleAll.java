package app;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.List;

import javax.swing.GroupLayout;
import javax.swing.JButton;
import javax.swing.JPanel;

import ch.aplu.turtle.Turtle;
import ch.aplu.turtle.TurtleFrame;

/**
 *
 * @author Cvetan Georgiev
 * Jul 7, 2017
 */

public class MyTurtleAll {

	private JPanel controlPanel;
	private JPanel panel;

	private TurtleFrame myTFrame;
	private Turtle turtle;
	private String shape = "";

	public enum Shape {
	    Triangle,
	    Hexagon,
	    Star,
	    Spiral,
	    Sun,
	    SpiralTriangles
	}

	private final Thread t;
	{
		t = new Thread(new Runnable() {
			public void run() {
				while (!Thread.interrupted()) {
					try {
						switch (shape) {
						case "Triangle":
							drawTriangle();
							break;
						case "Hexagon":
							drawHex();
							break;
						case "Star":
							drawStar();
							break;
						case "Spiral":
							drawSpiral();
							break;
						case "Sun":
							drawSun();
							break;
						case "SpiralTriangles":
							drawSpiralTriangles();
							break;

						default:
							break;
						}
							Thread.sleep(1000);
					} catch (Throwable t) {
						t.printStackTrace();
					}
				}
			}
		});
		t.setDaemon(true);
		t.setName("Draw");
		t.start();
	}

	private MyTurtleAll(){
	}

	public static void main (String[] args) {
		MyTurtleAll myExample = new MyTurtleAll();
		myExample.prepareGUI();
	}

	private void resetTurtle() {
		turtle.home();
		myTFrame.getPlayground().clear();
	}

	private void showTurtle() {
		if (turtle.isHidden()) {
			turtle.showTurtle();
		} else {
			turtle.hideTurtle();
		}
	}

	private void drawTriangle() {
		turtle.showTurtle();
		turtle.setPenColor(Color.blue);
		turtle.pd();
		turtle.rt(90);
		turtle.fd(200);
		turtle.lt(120);
		turtle.fd(200);
		turtle.lt(120);
		turtle.fd(200);
		turtle.rt(60);

		// Draw a line in a triangle
		turtle.rt(150);
		turtle.pu().fd(50);
		turtle.pd().fd(100);
		turtle.pu().bk(150);
		turtle.lt(150);
		turtle.pd();

		shape = "";
	}

	private void drawHex() {
		turtle.showTurtle();
		turtle.setPos(-86, 50);
		turtle.setPenColor(Color.blue);
		turtle.pd();
		for (int i = 0; i < 6; i++) {
			turtle.rt(60).fd(100);
		}

		shape = "";
	}

	private void drawStar() {
		turtle.showTurtle();
		turtle.setPenColor(Color.green);
		turtle.pd();
		for (int i = 0; i < 5; i++) {
			turtle.fd(200).rt(144);
		}

		shape = "";
	}

	private void drawSpiral() {
		turtle.showTurtle();
		turtle.setPenColor(Color.blue);
		turtle.pd();
		for (int i = 0; i < 20; i++) {
			turtle.fd(10 + i*10).rt(60);
		}

		shape = "";
	}

	private void drawSun() {
		turtle.showTurtle();
		turtle.setPenColor(Color.blue);
		turtle.pd();
		for (int i = 0; i < 36; i++) {
			turtle.fd(200).rt(170);
		}

		shape = "";
	}

	private void drawSpiralTriangles() {
		turtle.showTurtle();
		turtle.setPenColor(Color.red);
		turtle.pd();
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 21; j++) {
				turtle.rt(120).fd(20 + j*10);
			}
			turtle.rt(120);
		}

		shape = "";
	}

	private void prepareGUI() {

		controlPanel = new JPanel();
		panel = new JPanel();

		GroupLayout layout = new GroupLayout(panel);
		layout.setAutoCreateGaps(true);
		layout.setAutoCreateContainerGaps(true);

		JButton btn1 = new JButton("Draw");
		btn1.addActionListener(new ActionListener() {
	        public void actionPerformed(ActionEvent e) {
	        	shape = Shape.Triangle.toString();
	        }
	    });

		JButton btn2 = new JButton("Reset");
		btn2.addActionListener(new ActionListener() {
	        public void actionPerformed(ActionEvent e) {
	        	resetTurtle();
	        }
	    });

		JButton btn3 = new JButton("Hide / Show");
		btn3.addActionListener(new ActionListener() {
	        public void actionPerformed(ActionEvent e) {
				showTurtle();
	        }
	    });

		JButton btn4 = new JButton("Hexagon");
		btn4.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				shape = Shape.Hexagon.toString();
			}
		});

		JButton btn5 = new JButton("Star");
		btn5.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				shape = Shape.Star.toString();
			}
		});

		JButton btn6 = new JButton("Spiral");
		btn6.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				shape = Shape.Spiral.toString();
			}
		});

		JButton btn7 = new JButton("Sun");
		btn7.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				shape = Shape.Sun.toString();
			}
		});

		JButton btn8 = new JButton("Spiral Triangles");
		btn8.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				shape = Shape.SpiralTriangles.toString();
			}
		});

		List<JButton> bList = new ArrayList<>();
		bList.add(btn1);
		bList.add(btn2);
		bList.add(btn3);
		bList.add(btn4);
		bList.add(btn5);
		bList.add(btn6);
		bList.add(btn7);
		bList.add(btn8);

		Dimension d = new Dimension(150, 40);
		// to apply setting to All Buttons
		for (JButton jButton : bList) {
			jButton.setMinimumSize(d);
		}

		GroupLayout.SequentialGroup bSeqGroup = layout.createSequentialGroup();
		GroupLayout.ParallelGroup bParGroup = layout.createParallelGroup(GroupLayout.Alignment.CENTER);

		for (JButton jButton : bList) {
			bParGroup.addComponent(jButton);
			bSeqGroup.addComponent(jButton);
		}

		layout.setHorizontalGroup(bParGroup);

		layout.setVerticalGroup(bSeqGroup);

		panel.setLayout(layout);
		controlPanel.add(panel);

		myTFrame = new TurtleFrame("MyTurtles", 800, 600);

		myTFrame.add(controlPanel, BorderLayout.EAST);

		turtle = new Turtle(myTFrame, Color.green);
		turtle.hideTurtle();
		turtle.setLineWidth(5);
		myTFrame.setVisible(true);
		myTFrame.repaint();

	}

}
