"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  ArrowRight,
  Loader2,
  AlertCircle,
  RefreshCw,
  Navigation,
  Palette,
  FileText,
  Smartphone,
  Brain,
  Award,
  TrendingDown,
} from "lucide-react"

const auditFeatures = [
  {
    icon: Target,
    title: "Conversion Funnel Analysis",
    description: "Identify exactly where visitors drop off in your sales process",
  },
  {
    icon: BarChart3,
    title: "Page Performance Review",
    description: "Speed, mobile optimization, and user experience assessment",
  },
  {
    icon: TrendingUp,
    title: "Checkout Optimization",
    description: "Cart abandonment analysis and checkout flow improvements",
  },
  {
    icon: Zap,
    title: "Quick Win Recommendations",
    description: "Immediate changes you can make to boost conversions today",
  },
]

const frameworkCategories = [
  {
    key: "navigation",
    icon: Navigation,
    title: "Navigation",
    description: "Breadcrumbs, menu complexity, user flow",
    gradient: "from-blue-500/10 to-blue-600/10",
    border: "border-blue-500/20",
    iconBg: "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
    progressColor: "bg-blue-500",
  },
  {
    key: "display",
    icon: Palette,
    title: "Display",
    description: "Visual design, fonts, whitespace, layout",
    gradient: "from-purple-500/10 to-purple-600/10",
    border: "border-purple-500/20",
    iconBg: "bg-gradient-to-br from-purple-500/10 to-purple-600/10",
    progressColor: "bg-purple-500",
  },
  {
    key: "information",
    icon: FileText,
    title: "Information",
    description: "Product content, images, descriptions",
    gradient: "from-green-500/10 to-green-600/10",
    border: "border-green-500/20",
    iconBg: "bg-gradient-to-br from-green-500/10 to-green-600/10",
    progressColor: "bg-green-500",
  },
  {
    key: "technical",
    icon: Smartphone,
    title: "Technical",
    description: "Page speed, mobile optimization",
    gradient: "from-orange-500/10 to-orange-600/10",
    border: "border-orange-500/20",
    iconBg: "bg-gradient-to-br from-orange-500/10 to-orange-600/10",
    progressColor: "bg-orange-500",
  },
  {
    key: "psychological",
    icon: Brain,
    title: "Psychological",
    description: "Trust signals, social proof",
    gradient: "from-pink-500/10 to-pink-600/10",
    border: "border-pink-500/20",
    iconBg: "bg-gradient-to-br from-pink-500/10 to-pink-600/10",
    progressColor: "bg-pink-500",
  },
]

// ✅ FIXED: Correct TypeScript interface matching backend structure
interface FrameworkFeedback {
  category: string
  score: number
  strengths: string[]
  improvements: string[]
  metrics: Record<string, any>
}

interface LighthouseMetrics {
  performance_score?: number
  accessibility_score?: number
  best_practices_score?: number
  seo_score?: number
  first_contentful_paint?: number
  speed_index?: number
  largest_contentful_paint?: number
  time_to_interactive?: number
  total_blocking_time?: number
  cumulative_layout_shift?: number
  lighthouse_available: boolean
}

interface AnalysisResult {
  overall_score: number

  // Legacy category scores (mapped from framework)
  category_scores: {
    product_page?: number
    cart_page?: number
    mobile?: number
    trust_signals?: number
    coupons?: number
    delivery?: number
  }

  // Framework analysis with actual framework categories
  visual_analysis?: {
    overall_score?: number
    category_scores: {
      navigation?: number
      display?: number
      information?: number
      technical?: number
      psychological?: number
    }
    visual_issues?: string[]
    mobile_issues?: string[]
    framework_feedback?: FrameworkFeedback[]
    lighthouse_metrics?: LighthouseMetrics
  }

  recommendations: Array<{
    category: string
    priority: "high" | "medium" | "low"
    issue: string
    solution: string
    impact: string
    source: string
  }>

  models_used: string[]
}

export function CroAudit() {
  const [website, setWebsite] = useState("")
  const [email, setEmail] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-green-500"
    if (score >= 70) return "text-yellow-500"
    if (score >= 60) return "text-orange-500"
    return "text-red-500"
  }

  const getScoreBadge = (score: number) => {
    if (score >= 90) return { text: "Excellent", class: "bg-green-500/10 text-green-700 border-green-500/20" }
    if (score >= 80) return { text: "Good", class: "bg-green-500/10 text-green-600 border-green-500/20" }
    if (score >= 70) return { text: "Fair", class: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20" }
    if (score >= 60) return { text: "Needs Work", class: "bg-orange-500/10 text-orange-700 border-orange-500/20" }
    return { text: "Poor", class: "bg-red-500/10 text-red-700 border-red-500/20" }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 text-red-700 border-red-500/20"
      case "medium":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
      case "low":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20"
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20"
    }
  }

  // ✅ FIXED: Simplified to only check visual_analysis
  const getFrameworkScore = (data: AnalysisResult, categoryKey: string): number => {
    return (
      data.visual_analysis?.category_scores?.[categoryKey as keyof typeof data.visual_analysis.category_scores] || 0
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsAnalyzing(true)
    setError(null)
    setAnalysisResult(null)

    try {
      const response = await fetch("http://localhost:8080/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: website,
          client_name: email.split("@")[0],
        }),
      })

      if (!response.ok) {
        throw new Error(`Analysis failed: ${response.statusText}`)
      }

      const data = await response.json()
      console.log("✅ Backend response received:", data)
      console.log("📊 Framework scores:", data.visual_analysis?.category_scores)
      console.log("📋 Framework feedback:", data.visual_analysis?.framework_feedback)
      setAnalysisResult(data)
    } catch (err) {
      console.error("❌ Analysis error:", err)
      setError(err instanceof Error ? err.message : "Analysis failed. Please try again.")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const resetForm = () => {
    setWebsite("")
    setEmail("")
    setAnalysisResult(null)
    setError(null)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div id="cro-audit" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-6xl mx-auto">
          {!analysisResult ? (
            <>
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-4 py-2 mb-6">
                  <Target className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">Free CRO Analysis</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
                  Get Your Free
                  <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                    5-Point CRO Audit Report
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                  Enter your website URL and get a comprehensive conversion rate optimization report using our advanced
                  5-point framework analysis.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-6 items-center">
                <div className="space-y-8 px-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {auditFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                            <feature.icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="font-semibold text-green-800 dark:text-green-400">5-Point Framework Analysis:</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                        Navigation & User Flow Analysis
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                        Visual Design & Layout Assessment
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                        Information Architecture Review
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                        Technical Performance Evaluation
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                        Psychological Trust Factor Analysis
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:pl-8">
                  <Card className="bg-background/80 backdrop-blur-sm border-primary/20 shadow-2xl">
                    <CardHeader className="text-center px-4 sm:px-6">
                      <CardTitle className="text-xl sm:text-2xl">Start Your Free CRO Audit</CardTitle>
                      <CardDescription>Get your AI-powered conversion optimization report instantly</CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6">
                      {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                          <div className="flex items-center">
                            <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                            <span className="text-red-800 dark:text-red-300 text-sm">{error}</span>
                          </div>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="website" className="block text-sm font-medium mb-2">
                              Website URL *
                            </label>
                            <Input
                              id="website"
                              type="url"
                              placeholder="https://yourstore.com"
                              value={website}
                              onChange={(e) => setWebsite(e.target.value)}
                              required
                              disabled={isAnalyzing}
                              className="h-12 text-base"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              disabled={isAnalyzing}
                              className="h-12 text-base"
                            />
                          </div>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          disabled={isAnalyzing}
                          className="w-full h-12 text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-200 disabled:transform-none disabled:opacity-70"
                        >
                          {isAnalyzing ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Analyzing Your Website...
                            </>
                          ) : (
                            <>
                              Get My Free CRO Audit
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          Analysis powered by AI + 5-Point CRO Framework. Results in 30-60 seconds.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-8">
              {/* Overall Score Header */}
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-4 py-2 mb-4">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm font-medium text-primary">Analysis Complete</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">CRO Analysis Report</h3>
                    <p className="text-muted-foreground mb-4">
                      Analysis for <span className="font-semibold">{website}</span>
                    </p>
                    <div className="inline-flex items-center space-x-6">
                      <div className="text-center">
                        <div className={`text-5xl font-bold ${getScoreColor(analysisResult.overall_score)}`}>
                          {analysisResult.overall_score}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Overall Score</div>
                      </div>
                      <div className="text-center">
                        <Badge variant="outline" className={getScoreBadge(analysisResult.overall_score).class}>
                          {getScoreBadge(analysisResult.overall_score).text}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-2">
                          {analysisResult.models_used.join(" + ")}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 5-Point Framework Results */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                    5-Point Framework Analysis
                  </span>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {frameworkCategories.map((category) => {
                    const score = getFrameworkScore(analysisResult, category.key)
                    const IconComponent = category.icon

                    return (
                      <Card
                        key={category.key}
                        className="hover:shadow-lg transition-shadow duration-300 bg-background/80 backdrop-blur-sm"
                      >
                        <CardContent className="pt-6">
                          <div className="flex items-center mb-4">
                            <div
                              className={`w-10 h-10 rounded-lg ${category.iconBg} flex items-center justify-center mr-3`}
                            >
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{category.title}</h4>
                              <p className="text-xs text-muted-foreground">{category.description}</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Score</span>
                              <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}/100</span>
                            </div>
                            <Progress value={score} className="h-2" />
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* 🆕 Framework Feedback - Detailed Strengths & Improvements */}
              {analysisResult.visual_analysis?.framework_feedback &&
                analysisResult.visual_analysis.framework_feedback.length > 0 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                      <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                        Detailed Framework Insights
                      </span>
                    </h3>

                    {analysisResult.visual_analysis.framework_feedback.map((feedback, index) => (
                      <Card key={index} className="bg-background/80 backdrop-blur-sm border-primary/10">
                        <CardHeader className="px-4 sm:px-6 py-4">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <CardTitle className="capitalize flex items-center text-base sm:text-lg">
                              {frameworkCategories.find((c) => c.key === feedback.category)?.icon && (
                                <span className="mr-2">
                                  {(() => {
                                    const Icon = frameworkCategories.find((c) => c.key === feedback.category)?.icon
                                    return Icon ? <Icon className="h-5 w-5" /> : null
                                  })()}
                                </span>
                              )}
                              {feedback.category}
                            </CardTitle>
                            <Badge variant="outline" className={getScoreBadge(feedback.score).class}>
                              {feedback.score}/100
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="px-4 sm:px-6 py-4 space-y-4">
                          {/* Strengths */}
                          {feedback.strengths.length > 0 && (
                            <div className="bg-green-500/5 rounded-lg p-4 border border-green-500/20">
                              <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                What's Working Well
                              </h4>
                              <ul className="space-y-2">
                                {feedback.strengths.map((strength, i) => (
                                  <li key={i} className="text-sm flex items-start">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                                    <span className="text-green-800 dark:text-green-300">{strength}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Improvements */}
                          {feedback.improvements.length > 0 && (
                            <div className="bg-orange-500/5 rounded-lg p-4 border border-orange-500/20">
                              <h4 className="font-semibold text-orange-600 mb-3 flex items-center">
                                <TrendingDown className="h-4 w-4 mr-2" />
                                Areas for Improvement
                              </h4>
                              <ul className="space-y-2">
                                {feedback.improvements.map((improvement, i) => (
                                  <li key={i} className="text-sm flex items-start">
                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                                    <span className="text-orange-800 dark:text-orange-300">{improvement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Metrics */}
                          {Object.keys(feedback.metrics).length > 0 && (
                            <div className="pt-3 border-t">
                              <h4 className="font-semibold text-sm text-muted-foreground mb-3">Technical Metrics</h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
                                {Object.entries(feedback.metrics).map(([key, value]) => (
                                  <div key={key} className="text-sm bg-muted/30 rounded p-2">
                                    <span className="text-muted-foreground capitalize block text-xs">
                                      {key.replace(/_/g, " ")}
                                    </span>
                                    <span className="font-medium">
                                      {typeof value === "boolean"
                                        ? value
                                          ? "✓ Yes"
                                          : "✗ No"
                                        : Array.isArray(value)
                                          ? value.join(", ")
                                          : String(value)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

              {/* 🆕 Lighthouse Performance Metrics */}
              {analysisResult.visual_analysis?.lighthouse_metrics?.lighthouse_available && (
                <Card className="bg-background/80 backdrop-blur-sm border-primary/10">
                  <CardHeader className="px-4 sm:px-6 py-4">
                    <CardTitle className="flex items-center text-base sm:text-lg">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Lighthouse Performance Audit
                    </CardTitle>
                    <CardDescription>Google Lighthouse technical performance scores</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6 py-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6">
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <div
                          className={`text-3xl font-bold ${getScoreColor(analysisResult.visual_analysis.lighthouse_metrics.performance_score || 0)}`}
                        >
                          {analysisResult.visual_analysis.lighthouse_metrics.performance_score}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Performance</div>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <div
                          className={`text-3xl font-bold ${getScoreColor(analysisResult.visual_analysis.lighthouse_metrics.accessibility_score || 0)}`}
                        >
                          {analysisResult.visual_analysis.lighthouse_metrics.accessibility_score}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Accessibility</div>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <div
                          className={`text-3xl font-bold ${getScoreColor(analysisResult.visual_analysis.lighthouse_metrics.best_practices_score || 0)}`}
                        >
                          {analysisResult.visual_analysis.lighthouse_metrics.best_practices_score}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Best Practices</div>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <div
                          className={`text-3xl font-bold ${getScoreColor(analysisResult.visual_analysis.lighthouse_metrics.seo_score || 0)}`}
                        >
                          {analysisResult.visual_analysis.lighthouse_metrics.seo_score}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">SEO</div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-sm mb-3">Core Web Vitals</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                        <div className="bg-muted/30 rounded p-3">
                          <span className="text-muted-foreground block text-xs">First Contentful Paint</span>
                          <span className="font-medium">
                            {(
                              (analysisResult.visual_analysis.lighthouse_metrics.first_contentful_paint || 0) / 1000
                            ).toFixed(2)}
                            s
                          </span>
                        </div>
                        <div className="bg-muted/30 rounded p-3">
                          <span className="text-muted-foreground block text-xs">Largest Contentful Paint</span>
                          <span className="font-medium">
                            {(
                              (analysisResult.visual_analysis.lighthouse_metrics.largest_contentful_paint || 0) / 1000
                            ).toFixed(2)}
                            s
                          </span>
                        </div>
                        <div className="bg-muted/30 rounded p-3">
                          <span className="text-muted-foreground block text-xs">Total Blocking Time</span>
                          <span className="font-medium">
                            {analysisResult.visual_analysis.lighthouse_metrics.total_blocking_time?.toFixed(0)}ms
                          </span>
                        </div>
                        <div className="bg-muted/30 rounded p-3">
                          <span className="text-muted-foreground block text-xs">Cumulative Layout Shift</span>
                          <span className="font-medium">
                            {analysisResult.visual_analysis.lighthouse_metrics.cumulative_layout_shift?.toFixed(3)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Recommendations */}
              {analysisResult.recommendations.length > 0 && (
                <Card>
                  <CardHeader className="px-4 sm:px-6 py-4">
                    <CardTitle className="flex items-center text-base sm:text-lg">
                      <Zap className="h-5 w-5 mr-2 text-primary" />
                      Priority Recommendations
                    </CardTitle>
                    <CardDescription>Actionable improvements to boost your conversion rate</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6 py-4">
                    <div className="space-y-4">
                      {analysisResult.recommendations.slice(0, 10).map((rec, index) => (
                        <div
                          key={index}
                          className="border rounded-lg p-3 sm:p-4 hover:bg-accent/5 transition-colors bg-background/50 backdrop-blur-sm"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className={getPriorityBadge(rec.priority)}>
                                {rec.priority.toUpperCase()}
                              </Badge>
                              <span className="text-sm text-muted-foreground capitalize">{rec.category}</span>
                            </div>
                          </div>
                          <h5 className="font-semibold mb-2">{rec.issue}</h5>
                          <p className="text-sm text-muted-foreground mb-2">{rec.solution}</p>
                          <p className="text-xs text-green-600 font-medium">💰 {rec.impact}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Issues Summary */}
              {((analysisResult.visual_analysis?.visual_issues?.length ?? 0) > 0 ||
                (analysisResult.visual_analysis?.mobile_issues?.length ?? 0) > 0) && (
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  {(analysisResult.visual_analysis?.visual_issues?.length ?? 0) > 0 && (
                    <Card className="bg-background/80 backdrop-blur-sm">
                      <CardHeader className="px-4 sm:px-6 py-4">
                        <CardTitle className="text-base sm:text-lg flex items-center">
                          <Palette className="h-5 w-5 mr-2 text-primary" />
                          Visual Issues
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 sm:px-6 py-4">
                        <ul className="space-y-2">
                          {analysisResult.visual_analysis?.visual_issues?.slice(0, 6)?.map((issue, index) => (
                            <li key={index} className="text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                  {(analysisResult.visual_analysis?.mobile_issues?.length ?? 0) > 0 && (
                    <Card className="bg-background/80 backdrop-blur-sm">
                      <CardHeader className="px-4 sm:px-6 py-4">
                        <CardTitle className="text-base sm:text-lg flex items-center">
                          <Smartphone className="h-5 w-5 mr-2 text-primary" />
                          Mobile Issues
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 sm:px-6 py-4">
                        <ul className="space-y-2">
                          {analysisResult.visual_analysis?.mobile_issues?.slice(0, 6)?.map((issue, index) => (
                            <li key={index} className="text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button onClick={resetForm} variant="outline" size="lg">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Analyze Another Site
                </Button>
                <Button
                  onClick={() => window.print()}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                  Download Report
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
